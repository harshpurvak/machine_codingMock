# Interview Practice Tracker

A simple and responsive dashboard to keep track of my interview preparation in one place.

I built this project to organize my practice questions, track my progress, and see how many questions I have completed. Instead of managing everything manually, I wanted one place where I could add questions, update their status, and filter them whenever needed.

## Features

* **Dashboard:** Shows total questions, pending questions, and category-wise completion counts.
* **Add Questions:** Add a question with its category, difficulty, and current status.
* **Categories:** Organize questions into DSA, Git, and Technical categories.
* **Difficulty Levels:** Choose between Easy, Medium, and Hard.
* **Status Tracking:** Mark questions as Pending, In Progress, or Completed.
* **Search:** Search questions by title, category, or difficulty.
* **Filters:** Filter questions by category, status, and difficulty.
* **Progress Bar:** Shows overall completion progress based on the questions marked as completed.
* **Delete Questions:** Remove questions that are no longer needed.
* **Local Storage:** Saves questions in the browser so they remain available after refreshing the page.
* **Machine Coding Status:** Track the status of machine coding practice separately.
* **Form Validation:** Prevents saving a question without a title or category and displays an appropriate error message.
* **Responsive Design:** Designed to work on desktop, tablet, and mobile screens.
* **Empty States:** Displays helpful messages when there are no questions or no matching search results.

## Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript
* Browser Local Storage

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal to view the application in your browser.

## How to Use

1. Open the dashboard to see your current preparation progress.
2. Click on **Add Question** to add a new question.
3. Enter the question title and select its category.
4. Choose a difficulty level and status.
5. Save the question to add it to your list.
6. Update its status as you make progress.
7. Use the search bar and filters to find specific questions.
8. Delete questions that you no longer want to track.
9. Check the progress bar and dashboard counts to see your overall progress.

## Data Storage

This project uses browser Local Storage to save questions and the machine coding status.

There is no backend or database connected to the application. The saved data belongs to the browser and device being used. Clearing the browser's local storage can remove the saved data.

## Assumptions and Limitations

* The tracker is designed for personal interview preparation.
* DSA, Git, and Technical are the available question categories.
* Each question has a title, category, difficulty, and status.
* Overall progress is calculated using the number of completed questions divided by the total number of questions.
* Machine coding status is tracked separately from the question list.
* Data is stored locally in the browser, so it is not automatically synced across devices.
* No login or registration is required.

## Future Improvements

Some improvements I would like to explore in the future:

* Edit existing questions.
* Add sorting options.
* Export preparation data.
* Add a more detailed category-wise progress view.

## Author

**Harshit Gusain**

Built as a frontend machine coding practice project to improve my React skills, component structure, state management, and responsive UI development.
