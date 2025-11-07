"use client"

import { useState, useEffect, useMemo, useRef, type ReactNode } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import {
  Search,
  DollarSign,
  ExternalLink,
  Star,
  Globe,
  Smartphone,
  Package,
  Palette,
  Monitor,
  Maximize2,
  Minimize2,
  CheckCircle,
  User,
  Shield,
  Heart,
  ThumbsDown,
  CreditCard,
  FileText,
  FileImage,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProjects, getCategories, type Project, type Category } from "@/lib/api"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [projectLikes, setProjectLikes] = useState<{ [key: string]: { liked: boolean; disliked: boolean } }>({})
  const [apiProjects, setApiProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [allProjectsForCounts, setAllProjectsForCounts] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [filtering, setFiltering] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const AttachmentButton = ({ href, label, icon }: { href: string; label: string; icon: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 bg-black/40 text-xs text-gray-200 hover:text-[#ffcc66] hover:border-[#ffcc66] transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  )

  // Fetch projects and categories from API (initial load)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const [projectsResponse, categoriesResponse] = await Promise.all([
          getProjects(selectedCategory ? { category: selectedCategory } : {}),
          getCategories()
        ])
        setApiProjects(projectsResponse.projects)
        setCategories(categoriesResponse.categories)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err instanceof Error ? err.message : 'Failed to load data')
        setApiProjects([])
        setCategories([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, []) // Only run on initial mount

  // Fetch projects when category changes (without full page reload)
  useEffect(() => {
    if (categories.length === 0) return // Don't filter until categories are loaded
    
    const fetchFilteredProjects = async () => {
      setFiltering(true)
      try {
        const projectsResponse = await getProjects(selectedCategory ? { category: selectedCategory } : {})
        setApiProjects(projectsResponse.projects)
      } catch (err) {
        console.error('Error filtering projects:', err)
        setError(err instanceof Error ? err.message : 'Failed to filter projects')
      } finally {
        setFiltering(false)
      }
    }
    fetchFilteredProjects()
  }, [selectedCategory, categories.length])

  // Fetch all projects for filter counts (always keep this updated to show accurate "All Projects" count)
  useEffect(() => {
    if (categories.length > 0) {
      // Always fetch all projects to get accurate counts for "All Projects" and category filters
      getProjects().then(response => setAllProjectsForCounts(response.projects)).catch(() => setAllProjectsForCounts([]))
    }
  }, [categories.length])

  // Map API projects to UI format
  const mapApiProjectToUI = (project: Project) => {
    // Use actual category from API, fallback to inferring from technologies if not available
    let category = 'web' // Default
    if (project.category?.name) {
      // Map category name to a simple category identifier for UI compatibility
      const catName = project.category.name.toLowerCase()
      if (catName.includes('mobile') || catName.includes('app')) {
        category = 'mobile'
      } else if (catName.includes('product') || catName.includes('iot') || catName.includes('hardware')) {
        category = 'product'
      } else {
        category = 'web'
      }
    } else {
      // Fallback: Determine category from technologies
      category = project.technologiesUsed.some(t => 
        t.toLowerCase().includes('react native') || 
        t.toLowerCase().includes('flutter') ||
        t.toLowerCase().includes('mobile')
      ) ? 'mobile' : 
      project.technologiesUsed.some(t => 
        t.toLowerCase().includes('iot') || 
        t.toLowerCase().includes('hardware')
      ) ? 'product' : 'web'
    }

    return {
      id: project.id,
      name: project.projectName,
      client: project.companyName,
      category,
      categoryName: project.category?.name || null, // Store actual category name
      status: project.projectStatus,
      budget: '', // Not in API
      timeline: project.projectCompletionTime,
      completion: project.projectStatus === 'completed' ? 100 : project.projectStatus === 'active' ? 50 : 0,
      rating: 5, // Default
      description: project.projectOverview,
      image: project.companyLogo ? `${API_BASE_URL}${project.companyLogo}` : "/placeholder.svg?height=300&width=500",
      logo: project.companyLogo ? `${API_BASE_URL}${project.companyLogo}` : "/placeholder-logo.svg",
      tags: project.technologiesUsed.slice(0, 4),
      metrics: project.projectMetrics || {
        revenue: 'N/A',
        users: 'N/A',
        satisfaction: 'N/A',
      },
      featured: project.isFeatured,
      previewUrl: project.companyWebsite || '#',
      hasLivePreview: !!project.companyWebsite,
      details: {
        overview: project.projectOverview,
        features: project.keyFeatures,
        technologies: project.technologiesUsed,
        team: project.teamMembers || [],
        milestones: project.projectMilestones?.map((m, i) => ({
          name: m,
          date: new Date(project.createdAt).toISOString().split('T')[0],
          status: 'completed' as const,
        })) || [],
      },
      files: {
        visitingCard: project.visitingCard ? `${API_BASE_URL}${project.visitingCard}` : null,
        letterhead: project.letterhead ? `${API_BASE_URL}${project.letterhead}` : null,
        companyProfile: project.companyProfile ? `${API_BASE_URL}${project.companyProfile}` : null,
      },
    }
  }

  // Create category-based filters
  const categoryFilters = [
    { 
      id: null, 
      label: "All Projects", 
      // Always show total count of all projects, regardless of selected category
      count: allProjectsForCounts.length || apiProjects.length
    },
    ...categories.map(cat => ({
      id: cat.id,
      label: cat.name,
      // Always use allProjectsForCounts for accurate category counts
      count: allProjectsForCounts.filter(p => p.categoryId === cat.id || p.category?.id === cat.id).length
    }))
  ]

  // Use categoryFilters instead of old filters
  const filters = categoryFilters

  // Use API projects, mapped to UI format
  const projects = apiProjects.map(mapApiProjectToUI)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Category filtering is handled by API, so we just filter by search
    return matchesSearch
  })

  // Track previous category to detect category changes
  const prevCategoryRef = useRef<string | null>(null)
  const prevFilteredProjectIdsRef = useRef<string[]>([])

  // Set first project as default selected (only if no project is selected or selected project is not in filtered list)
  useEffect(() => {
    if (filteredProjects.length > 0 && !filtering) {
      const currentProjectIds = filteredProjects.map(p => p.id)
      const categoryChanged = prevCategoryRef.current !== selectedCategory
      const projectListChanged = JSON.stringify(prevFilteredProjectIdsRef.current) !== JSON.stringify(currentProjectIds)
      
      // Check if currently selected project is still in the filtered list
      const currentProjectInList = selectedProject && filteredProjects.find(p => p.id === selectedProject.id)
      
      if (!selectedProject) {
        // No project selected, select the first one
        setSelectedProject(filteredProjects[0])
      } else if (!currentProjectInList && (categoryChanged || projectListChanged)) {
        // Selected project is no longer in the filtered list, select the first available
        // Only update if category changed or project list actually changed
        setSelectedProject(filteredProjects[0])
      }
      // If current project is still in list, keep it - don't update to prevent iframe reload
      
      // Update refs
      prevCategoryRef.current = selectedCategory
      prevFilteredProjectIdsRef.current = currentProjectIds
    }
  }, [filteredProjects, filtering, selectedCategory, selectedProject])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffcc66] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error && projects.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-2">Error loading projects</p>
          <p className="text-gray-400 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className="w-4 h-4" />
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "product":
        return <Package className="w-4 h-4" />
      case "branding":
        return <Palette className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "in-progress":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      case "planning":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
    }
  }

  const handleLike = (projectId: string) => {
    setProjectLikes((prev) => ({
      ...prev,
      [projectId]: {
        liked: !prev[projectId]?.liked,
        disliked: false,
      },
    }))
    console.log(`Liked project: ${projectId}`)
  }

  const handleDislike = (projectId: string) => {
    setProjectLikes((prev) => ({
      ...prev,
      [projectId]: {
        liked: false,
        disliked: !prev[projectId]?.disliked,
      },
    }))
    console.log(`Disliked project: ${projectId}`)
  }

  // Mobile view detection
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="flex-1 pt-16">
          <div className="p-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-3 text-white">Projects</h1>
              <p className="text-sm text-gray-400">
                Explore our comprehensive portfolio of successful client projects.
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((filter) => (
                <button
                  key={filter.id || 'all'}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedCategory(filter.id);
                  }}
                  className={`px-3 py-1 text-xs rounded transition-all ${
                    selectedCategory === filter.id
                      ? "bg-secondary/20 text-secondary border border-primary/50"
                      : "bg-gray-950 text-gray-400 border border-gray-800 hover:text-white hover:border-primary/30"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* Mobile Project List - Scrollable */}
            <div className="space-y-6 relative">
              {filtering && (
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffcc66]"></div>
                </div>
              )}
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="bg-black border border-white/20 rounded-lg overflow-hidden">
                  {/* Project Header */}
                  <div className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={project.logo || "/placeholder.svg"}
                        alt={project.name}
                        className="w-16 h-16 object-contain bg-gray-800/50 rounded-lg p-2"
                      />
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-white">{project.name}</h2>
                        <p className="text-sm text-gray-400">{project.client}</p>
                        {project.categoryName && (
                          <p className="text-xs text-[#ffcc66] mt-1">{project.categoryName}</p>
                        )}
                        <div className="flex items-center space-x-2 mt-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                              project.status,
                            )}`}
                          >
                            {project.status === "in-progress" ? "In Progress" : "Completed"}
                          </span>
                          <span className="text-xs text-green-400 font-semibold">{project.metrics.revenue}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  </div>

                  {/* Project Preview */}
                  <div className="bg-white">
                    {project.hasLivePreview ? (
                      <iframe
                        key={project.id}
                        src={project.previewUrl}
                        className="w-full h-64 border-0"
                        title={`${project.name} Preview`}
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gray-900 text-white">
                        <div className="text-center">
                          <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-400">Private Project</p>
                          <p className="text-sm text-gray-500">Preview not available</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
                      <div className="space-y-2">
                        {project.details.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-1">
                        {project.details.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#ffcc66]/20 text-[#ffcc66] rounded text-xs border border-[#ffcc66]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                      {(project.files.visitingCard || project.files.letterhead || project.files.companyProfile) && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Brand Assets</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.files.visitingCard && (
                              <AttachmentButton
                                href={project.files.visitingCard}
                                label="Visiting Card"
                                icon={<CreditCard className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                            {project.files.letterhead && (
                              <AttachmentButton
                                href={project.files.letterhead}
                                label="Letterhead"
                                icon={<FileImage className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                            {project.files.companyProfile && (
                              <AttachmentButton
                                href={project.files.companyProfile}
                                label="Company Profile"
                                icon={<FileText className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                          </div>
                        </div>
                      )}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-green-400">{project.metrics.revenue}</div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-blue-400">{project.metrics.users}</div>
                        <div className="text-xs text-gray-400">Users</div>
                      </div>
                      <div className="bg-gray-950 border border-gray-800 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-purple-400">{project.metrics.satisfaction}</div>
                        <div className="text-xs text-gray-400">Satisfaction</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      {project.hasLivePreview ? (
                        <Button
                          onClick={() => window.open(project.previewUrl, "_blank")}
                          size="sm"
                          className="flex-1 bg-[#ffcc66]/20 text-[#ffcc66] hover:bg-[#ffcc66]/30 border border-[#ffcc66]/30"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </Button>
                      ) : (
                        <Button disabled size="sm" variant="outline" className="flex-1 border-gray-600 text-gray-500">
                          <Shield className="w-4 h-4 mr-2" />
                          Private
                        </Button>
                      )}
                      <Button
                        onClick={() => handleLike(project.id)}
                        size="sm"
                        variant="outline"
                        className={`border-gray-600 ${
                          projectLikes[project.id]?.liked ? "bg-red-500 text-white" : "text-gray-400"
                        }`}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDislike(project.id)}
                        size="sm"
                        variant="outline"
                        className={`border-gray-600 ${
                          projectLikes[project.id]?.disliked ? "bg-gray-700 text-white" : "text-gray-400"
                        }`}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="flex flex-1 pt-16">
          {/* Left Sidebar - Projects List */}
          <div className="w-1/4 border-r border-gray-800 bg-black overflow-y-auto">
            <div className="p-4">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-3 text-white">Projects</h1>
                <p className="text-sm text-gray-400">
                  Explore our comprehensive portfolio of successful client projects.
                </p>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="bg-gray-950 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">$12M+</p>
                      <p className="text-xs text-gray-400">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 text-sm"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-1 mb-4">
                {filters.map((filter) => (
                  <button
                    key={filter.id || 'all'}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedCategory(filter.id);
                    }}
                    className={`px-2 py-1 text-xs rounded transition-all ${
                      selectedCategory === filter.id
                        ? "bg-secondary/20 text-secondary border border-primary/50"
                        : "bg-gray-950 text-gray-400 border border-gray-800 hover:text-white hover:border-primary/30"
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>

              {/* Projects List */}
              <div className="space-y-3 relative">
                {filtering && (
                  <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffcc66]"></div>
                  </div>
                )}
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`cursor-pointer rounded-lg border transition-all duration-300 ${
                      selectedProject?.id === project.id
                        ? "bg-black border-white/30 shadow-lg"
                        : "bg-black border-white/10 hover:border-white/20 hover:shadow-md"
                    }`}
                  >
                    <div className="p-3">
                      <div className="flex items-start space-x-2">
                        <img
                          src={project.logo || "/placeholder.svg"}
                          alt={project.name}
                          className="w-8 h-8 object-contain bg-gray-800 rounded p-1 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-white truncate text-sm">{project.name}</h3>
                            {project.featured && (
                              <span className="px-1 py-0.5 text-green-400 bg-green-400/10 border-green-400/20 rounded text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mb-1">{project.client}</p>
                          {project.categoryName && (
                            <p className="text-xs text-[#ffcc66] mb-1">{project.categoryName}</p>
                          )}
                          <p className="text-xs text-gray-500 line-clamp-2 mb-2">{project.description}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {getCategoryIcon(project.category)}
                              <span className="text-xs text-gray-400">{project.category}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(project.rating)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Project Details & Preview */}
          <div className="flex-1 flex flex-col bg-black relative">
            {selectedProject ? (
              <>
                {/* Project Header */}
                <div className="border-b border-gray-800 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <img
                        src={selectedProject.logo || "/placeholder.svg"}
                        alt={selectedProject.name}
                        className="w-24 h-24 object-contain bg-gray-800/50 rounded-xl p-4 border border-gray-700"
                      />
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                        <p className="text-lg text-gray-400 mb-2">{selectedProject.client}</p>
                        {selectedProject.categoryName && (
                          <p className="text-sm text-[#ffcc66] mb-3">{selectedProject.categoryName}</p>
                        )}
                        <div className="flex items-center space-x-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                              selectedProject.status,
                            )}`}
                          >
                            {selectedProject.status === "in-progress" ? "In Progress" : "Completed"}
                          </span>
                          <span className="text-sm text-gray-400">{selectedProject.timeline}</span>
                          <span className="text-sm text-green-400 font-semibold">
                            {selectedProject.metrics.revenue}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {selectedProject.hasLivePreview && (
                        <Button
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800"
                        >
                          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </Button>
                      )}
                      {selectedProject.hasLivePreview ? (
                        <Button
                          onClick={() => window.open(selectedProject.previewUrl, "_blank")}
                          size="sm"
                          className="bg-[#ffcc66]/20 text-[#ffcc66] hover:bg-[#ffcc66]/30 border border-[#ffcc66]/30"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </Button>
                      ) : (
                        <Button
                          disabled
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-500 cursor-not-allowed"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Private Project
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex">
                  {/* Project Details */}
                  <div className={`${isFullscreen ? "hidden" : "w-2/5"} border-r border-gray-800 overflow-y-auto`}>
                    <div className="p-6 space-y-8">
                      {/* Overview */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                        <p className="text-gray-300 leading-relaxed">{selectedProject.details.overview}</p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                        <div className="space-y-3">
                          {selectedProject.details.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.details.technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#ffcc66]/20 text-[#ffcc66] rounded-full text-sm border border-[#ffcc66]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Team */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Team</h3>
                        <div className="space-y-2">
                          {selectedProject.details.team.map((member: string, index: number) => (
                            <div key={index} className="flex items-center text-gray-300">
                              <User className="w-4 h-4 text-gray-400 mr-3" />
                              {member}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Milestones */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Project Milestones</h3>
                        <div className="space-y-3">
                          {selectedProject.details.milestones.map((milestone: any, index: number) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div
                                  className={`w-3 h-3 rounded-full mr-3 ${
                                    milestone.status === "completed" ? "bg-green-400" : "bg-gray-600"
                                  }`}
                                />
                                <span className="text-gray-300">{milestone.name}</span>
                              </div>
                              <span className="text-sm text-gray-500">{milestone.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {(selectedProject.files.visitingCard ||
                        selectedProject.files.letterhead ||
                        selectedProject.files.companyProfile) && (
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-4">Project Files</h3>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.files.visitingCard && (
                              <AttachmentButton
                                href={selectedProject.files.visitingCard}
                                label="Visiting Card"
                                icon={<CreditCard className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                            {selectedProject.files.letterhead && (
                              <AttachmentButton
                                href={selectedProject.files.letterhead}
                                label="Letterhead"
                                icon={<FileImage className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                            {selectedProject.files.companyProfile && (
                              <AttachmentButton
                                href={selectedProject.files.companyProfile}
                                label="Company Profile"
                                icon={<FileText className="w-4 h-4 text-[#ffcc66]" />}
                              />
                            )}
                          </div>
                        </div>
                      )}

                      {/* Metrics */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Project Metrics</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Revenue Generated</span>
                              <span className="text-green-400 font-semibold">{selectedProject.metrics.revenue}</span>
                            </div>
                          </div>
                          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Active Users</span>
                              <span className="text-blue-400 font-semibold">{selectedProject.metrics.users}</span>
                            </div>
                          </div>
                          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-400">Satisfaction</span>
                              <span className="text-purple-400 font-semibold">
                                {selectedProject.metrics.satisfaction}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button
                          onClick={() => handleLike(selectedProject.id)}
                          variant="outline"
                          className={`border-gray-600 ${
                            projectLikes[selectedProject.id]?.liked
                              ? "bg-red-500 text-white border-red-500"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          {projectLikes[selectedProject.id]?.liked ? "Liked" : "Like"}
                        </Button>
                        <Button
                          onClick={() => handleDislike(selectedProject.id)}
                          variant="outline"
                          className={`border-gray-600 ${
                            projectLikes[selectedProject.id]?.disliked
                              ? "bg-gray-700 text-white border-gray-500"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          {projectLikes[selectedProject.id]?.disliked ? "Disliked" : "Dislike"}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Preview */}
                  <div className={`${isFullscreen ? "w-full" : "flex-1"} bg-white relative`}>
                    {filtering && selectedProject && (
                      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffcc66]"></div>
                      </div>
                    )}
                    {selectedProject.hasLivePreview ? (
                      <iframe
                        key={selectedProject.id}
                        src={selectedProject.previewUrl}
                        className="w-full h-full border-0"
                        title={`${selectedProject.name} Preview`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                        <div className="text-center">
                          <Shield className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                          <h3 className="text-2xl font-semibold text-white mb-4">Private Project</h3>
                          <p className="text-gray-400 max-w-md">
                            This project contains confidential client information and cannot be previewed publicly.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Select a Project</h3>
                  <p className="text-gray-400">Choose a project from the list to view details and preview</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
