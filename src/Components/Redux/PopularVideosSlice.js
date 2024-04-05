// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import React from "react";
// import { Youtube_API } from "../Constants/Constant";

// export const GetVideos = createAsyncThunk("GetVideos", async () => {
//   const response = await fetch(
//     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${Youtube_API}`
//   );
//   const data = await response.json();
//   console.log(data?.items);
// });
// const PopularVideosSlice = createSlice({
//   name: "popularVideos",
//   initialState: {
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(GetVideos.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(GetVideos.fulfilled, (state, action) => {
//       (state.isLoading = false), (state.data = action.payload);
//     });
//     builder.addCase(GetVideos.rejected, (state, action) => {
//       state.isError = true;
//     });
//   },
// });

// export default PopularVideosSlice.reducer;
