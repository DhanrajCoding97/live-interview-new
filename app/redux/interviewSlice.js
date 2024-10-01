import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initializeInterview = createAsyncThunk(
  "interview/initialize",
  async ({ interviewId, jobId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/v1/init",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ interviewId, jobId, userId }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNextQuestion = createAsyncThunk(
  "interview/fetchNextQuestion",
  async ({ interviewId, jobId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/v1/nextquestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ interviewId, jobId, userId }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const submitAnswer = createAsyncThunk(
  "interview/submitAnswer",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/v1/answer",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to submit answer");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    interviewId: "interview2",
    jobId: "job2",
    userId: "user2",
    totalQuestions: 0,
    currentQuestionNumber: 0,
    currentQuestion: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeInterview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initializeInterview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalQuestions = action.payload.totalQuestion;
      })
      .addCase(initializeInterview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNextQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNextQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentQuestion = action.payload;
        state.currentQuestionNumber += 1;
      })
      .addCase(fetchNextQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(submitAnswer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitAnswer.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(submitAnswer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default interviewSlice.reducer;

//-------------------------------------------------------------------------

// Submit Answer
// export const submitAnswer = createAsyncThunk(
//   "interview/submitAnswer",
//   async ({ formData }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://training-pipeline-430916.el.r.appspot.com/api/v1/answer",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       if (response.ok) {
//         return await response.json();
//       } else {
//         throw new Error("Failed to submit answer");
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Initialize Interview
// export const initializeInterview = createAsyncThunk(
//   "interview/initialize",
//   async ({ interviewId, jobId, userId }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://training-pipeline-430916.el.r.appspot.com/api/v1/init",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ interviewId, jobId, userId }),
//         }
//       );
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Fetch Random Questions
// export const fetchRandomQuestions = createAsyncThunk(
//   "interview/fetchRandomQuestions",
//   async (_, { rejectWithValue }) => {
//     try {
//       console.log("Fetching random questions..."); // Log when the fetch starts
//       const response = await fetch("http://localhost:8080/questions");
//       if (!response.ok) {
//         throw new Error("Failed to fetch questions");
//       }
//       const data = await response.json();

//       console.log("Fetched Questions Data:", data); // Log the fetched data

//       const randomQuestions = data.questions
//         .sort(() => 0.5 - Math.random())
//         .slice(0, 10);

//       console.log("Random Questions:", randomQuestions); // Log the random questions

//       // Convert text to speech for each question
//       const audioFiles = await Promise.all(
//         randomQuestions.map(async (question) => {
//           const audioUrl = await convertTextToSpeech(question.text);
//           return { ...question, audioUrl };
//         })
//       );

//       return audioFiles;
//     } catch (error) {
//       console.error("Error fetching random questions:", error); // Log any errors
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Function to convert text to speech
// const convertTextToSpeech = async (text) => {
//   const textToSpeechUrl =
//     "https://ai-interview-speech-356743497966.us-central1.run.app/text_to_speech";
//   const data = { text };

//   const response = await fetch(textToSpeechUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   // Log the response status and data
//   console.log("Text-to-Speech API Response Status:", response.status);

//   if (!response.ok) {
//     const errorText = await response.text(); // Get the error message
//     console.error("Error from Text-to-Speech API:", errorText);
//     throw new Error("Failed to convert text to speech");
//   }

//   const audioBlob = await response.blob();
//   const audioUrl = URL.createObjectURL(audioBlob); // Create a URL for the audio blob

//   // Log the audio URL
//   console.log("Generated Audio URL:", audioUrl);

//   return audioUrl; // Return the audio URL
// };

// // Slice definition
// const interviewSlice = createSlice({
//   name: "interview",
//   initialState: {
//     interviewId: "interview2",
//     jobId: "job2",
//     userId: "user2",
//     totalQuestions: 0,
//     currentQuestionNumber: 0,
//     currentQuestion: null,
//     questions: [], // Store random questions with audio URLs
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(initializeInterview.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(initializeInterview.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.totalQuestions = action.payload.totalQuestion;
//       })
//       .addCase(initializeInterview.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchRandomQuestions.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchRandomQuestions.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.questions = action.payload; // Store the questions with audio URLs
//         state.currentQuestion = action.payload[0]; // Set the first question as the current question
//         state.currentQuestionNumber = 0; // Reset question number
//       })
//       .addCase(fetchRandomQuestions.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default interviewSlice.reducer;
