# Calendly Configuration Guide

This guide explains how to configure your Calendly event type to receive all consultation form data.

## Prerequisites

1. A Calendly account 
2. An event type created in Calendly
3. Access to your Calendly event type settings

## Step-by-Step Setup Guide

### Step 1: Log in to Calendly

1. Go to [calendly.com](https://calendly.com) and log in to your account
2. Make sure you're on the **Standard Plan** or higher (required for custom questions)

### Step 2: Access Event Type Settings

1. Click on **Event Types** in the left sidebar
2. Find your consultation event type (or create a new one by clicking **+ New Event Type**)
3. Click on the event type name to open it
4. Click the **Edit** button (usually in the top right corner)

### Step 3: Navigate to Questions Section

1. In the event type editor, scroll down to find the **Questions** section
2. You'll see options like:
   - **Invitee Questions** (this is what you need)
   - **Additional Questions**
   - Or just **Questions**

3. Click on **Add Question** or **+ Add Question** button

### Step 4: Add the 8 Custom Questions

**IMPORTANT**: Add these questions in **exact order** (first to last). Calendly assigns question keys (a1, a2, etc.) based on the order you add them.

#### Question 1: Company Name
1. Click **Add Question**
2. Select **Short text** as the question type
3. Enter question text: `Company Name`
4. Leave it as **Optional** (not required)
5. Click **Save** or **Add**

#### Question 2: Phone Number
1. Click **Add Question** again
2. Select **Short text** as the question type
3. Enter question text: `Phone Number`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 3: Business Type
1. Click **Add Question**
2. Select **Short text** as the question type
3. Enter question text: `Business Type`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 4: Company Size
1. Click **Add Question**
2. Select **Short text** as the question type
3. Enter question text: `Company Size`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 5: Services Needed
1. Click **Add Question**
2. Select **Long text** as the question type (this allows multiple services)
3. Enter question text: `Services Needed`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 6: Budget Range
1. Click **Add Question**
2. Select **Short text** as the question type
3. Enter question text: `Budget Range`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 7: Timeline
1. Click **Add Question**
2. Select **Short text** as the question type
3. Enter question text: `Timeline`
4. Leave it as **Optional**
5. Click **Save** or **Add**

#### Question 8: Business Goals
1. Click **Add Question**
2. Select **Long text** as the question type (this allows multiple goals)
3. Enter question text: `Business Goals`
4. Leave it as **Optional**
5. Click **Save** or **Add**

### Step 5: Verify Question Order

After adding all 8 questions, verify they appear in this order:
1. Company Name
2. Phone Number
3. Business Type
4. Company Size
5. Services Needed
6. Budget Range
7. Timeline
8. Business Goals

**Note**: If you have other questions before these, the keys will shift. Make sure these are your first 8 custom questions, or adjust the code accordingly.

### Step 6: Save Your Event Type

1. Scroll to the top of the page
2. Click **Save** or **Done** to save your changes
3. Your event type is now configured!

### Step 7: Get Your Event Type URL

1. After saving, you'll see your event type URL
2. It will look like: `https://calendly.com/your-username/event-type-name`
3. Copy this URL - you'll need it for the environment variable

### Step 8: Set Environment Variable

1. Create or edit `.env.local` file in your project root
2. Add this line:
   \`\`\`env
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-type-name
   \`\`\`
3. Replace with your actual Calendly URL from Step 7
4. Restart your development server

### Visual Guide Reference

Here's what the questions section should look like:

\`\`\`
Questions Section:
┌─────────────────────────────────────┐
│ Invitee Questions                   │
│                                     │
│ 1. Company Name (Short text)        │
│ 2. Phone Number (Short text)       │
│ 3. Business Type (Short text)      │
│ 4. Company Size (Short text)       │
│ 5. Services Needed (Long text)     │
│ 6. Budget Range (Short text)        │
│ 7. Timeline (Short text)           │
│ 8. Business Goals (Long text)       │
│                                     │
│ [+ Add Question]                    │
└─────────────────────────────────────┘
\`\`\`

### Question Type Reference

| Question Key | Question Text | Question Type | Why This Type? |
|-------------|--------------|---------------|----------------|
| **a1** | Company Name | Short text | Single company name |
| **a2** | Phone Number | Short text | Phone number format |
| **a3** | Business Type | Short text | Single selection (startup, enterprise, etc.) |
| **a4** | Company Size | Short text | Single selection (1-10, 200+, etc.) |
| **a5** | Services Needed | **Long text** | Multiple services can be selected |
| **a6** | Budget Range | Short text | Single budget range |
| **a7** | Timeline | Short text | Single timeline selection |
| **a8** | Business Goals | **Long text** | Multiple goals can be selected |

### 3. Setting Question Keys in Calendly

**Important**: Calendly automatically assigns question keys (a1, a2, etc.) based on the order you add questions. 

To ensure the keys match:
1. Add questions in the exact order listed above
2. The first custom question will be `a1`, second will be `a2`, and so on
3. If you have other questions before these, adjust accordingly

**Finding Your Question Keys** (if they're different):

If your question keys are not a1-a8, you can find them by:

1. **Using Calendly API** (for developers):
   - Use Calendly's API to fetch your event type details
   - Question keys will be in the response

2. **Testing Method**:
   - Create a test booking with prefill data
   - Check the network requests in browser DevTools
   - Look for the question keys in the API call

3. **Contact Calendly Support**:
   - They can provide the exact question keys for your event type

**Alternative Method** (if available in your Calendly plan):
- Some Calendly plans allow you to set custom question keys
- If available, manually set the keys to match: a1, a2, a3, a4, a5, a6, a7, a8

**Note**: If your question keys are different, update the `customAnswers` object in `app/consultation/page.tsx` to match your actual keys.

### 4. Configure Environment Variable

Set your Calendly URL in your `.env.local` file:

\`\`\`env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/your-event-type
\`\`\`

Replace:
- `your-username` with your Calendly username
- `your-event-type` with your event type slug (e.g., "consultation", "30min", etc.)

### 5. Test the Integration

1. Fill out the consultation form on your website
2. Complete all 7 steps
3. Click "Book Consultation"
4. Verify that:
   - Name and email are pre-filled
   - All 8 custom questions show the consultation data
   - Data appears correctly in the booking form

### 6. Viewing Consultation Data in Calendly

Once a booking is made, you can view all consultation data:

1. Go to your Calendly **Scheduled Events** page
2. Click on any consultation booking
3. Scroll to see all the custom question answers
4. The data will also appear in:
   - Booking confirmation emails
   - Calendar event details
   - Calendly dashboard

## Data Mapping Reference

Here's what data is sent to each Calendly question:

| Calendly Question | Form Data Source | Example Value |
|------------------|------------------|---------------|
| a1: Company Name | Step 7 - Company field | "Acme Corp" |
| a2: Phone Number | Step 7 - Phone field | "+1 (555) 123-4567" |
| a3: Business Type | Step 1 - Business Type | "startup" or "Enterprise" |
| a4: Company Size | Step 2 - Company Size | "1-10" or "200+" |
| a5: Services Needed | Step 3 - Project Types | "Website Development, Mobile App" |
| a6: Budget Range | Step 4 - Budget | "5k-25k" or "$25K - $100K" |
| a7: Timeline | Step 5 - Timeline | "asap" or "1-3 months" |
| a8: Business Goals | Step 6 - Goals | "Increase Sales, Improve Efficiency" |

## Troubleshooting

### Data Not Appearing in Calendly

1. **Check Question Keys**: Ensure questions are added in the correct order (a1, a2, a3, etc.)
2. **Check Question Count**: If you have other questions before these, the keys will shift
3. **Verify Environment Variable**: Ensure `NEXT_PUBLIC_CALENDLY_URL` is set correctly
4. **Check Browser Console**: Look for any JavaScript errors when loading Calendly

### Questions Not Showing

1. Make sure custom questions are enabled in your Calendly event type
2. Verify you're using the correct event type URL
3. Check that questions are set to "Show on booking page"

### Data Format Issues

- Business Type, Company Size, Budget, and Timeline are sent as IDs (e.g., "startup", "5k-25k")
- Services and Goals are sent as comma-separated lists
- All fields are optional and will be `undefined` if not filled

## Additional Notes

- The consultation data is also saved to browser `localStorage` for user reference
- Guest mode users can preview the dashboard without booking
- All 7 steps of consultation data are captured and sent to Calendly
- The data appears in both the booking form (pre-filled) and in the final booking details
