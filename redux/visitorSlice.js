import { fetchAddress, getUserLocation } from "@/lib/helper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVisitor = createAsyncThunk("get/visitor", async () => {
  try {
    const location = await getUserLocation();
    const visitor = await fetchAddress(location.latitude, location.longitude);
        // console.log("dataaa",visitor);


    const data = sessionStorage.setItem(
      "visitor_data",
      JSON.stringify(visitor)
    );
    console.log("dataaa",data);

    return visitor.visitor_data;
  } catch (e) {
    if (e.message == "User denied Geolocation") {
      const visitor = await fetchAddress();
      sessionStorage.setItem(
        "visitor_data",
        JSON.stringify(visitor.visitor_data)
      );
      return visitor.visitor_data;
    }
  }
});

export const visitorSlice = createSlice({
  name: "visitor",
  initialState: {
    status: "idle", //idle, success, error, loading
    data: null,
  },
  reducers: {
    loadVisitor: (state) => {
      state.status = "success";
      state.data = JSON.parse(sessionStorage.getItem("visitor_data"));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVisitor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVisitor.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchVisitor.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default visitorSlice.reducer;
export const { loadVisitor } = visitorSlice.actions;
