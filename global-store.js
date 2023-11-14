const globalStore = {
  session: {},
  spots: {
    // Notice there are two slices of state within spots. This is to handle your two different routes for getting a spot.
    // Refer to your API Docs to get more information.

    [spotId]: {
      spotData,
      SpotImages: [imagesData],
      Owner: {
        ownerData,
      },
    },
  },
  // Again the idea here is two have separate slices for the different data responses you receive from your routes.
  // For example, you could use each of these slices specifically for the component you are dealing with on the frontend.
  reviews: {
    // When on a single spot, use the spot slice.
    spot: {
      [reviewId]: {
        reviewData,
        User: {
          userData,
        },
        ReviewImages: [imagesData],
      },
      optionalOrderedList: [],
    },
    // When on the user's reviews, use the user slice.
    user: {
      [reviewId]: {
        reviewData,
        User: {
          userData,
        },
        Spot: {
          spotData,
        },
        ReviewImages: [imagesData],
      },
      optionalOrderedList: [],
    },
  },
  bookings: {
    user: {
      [bookingId]: {
        bookingData,
        Spot: {
          spotData,
        },
      },
      optionalOrderedList: [],
    },
    // Note here that your responses can actually be different here as well.
    // HINT: What information should you see if you own this spot? (Refer to API Docs).
    spot: {
      [bookingId]: {
        bookingData,
      },
      optionalOrderedList: [],
    },
  },
};
