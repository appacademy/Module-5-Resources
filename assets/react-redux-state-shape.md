# Store Examples for projects

The examples below are to provide suggestions and inspiration for designing
your own redux store shapes.

**There are multiple correct ways to implement your Redux store shape.**

Please feel free to deviate if it makes sense to you for your project.

**Only implement slices of state as you need it.** These examples are
designed with 3+ features. Pick the parts you need as you implement that feature.

## AirBnb Store Shape:

```js
store = {
  session: { user: null },
  spots: {
    // be sure to normalize your spot data
    [spotId]: {
      id: number,
      ownerId: number,
      address: string,
      city: string,
      state: string,
      country: string,
      lat: float,
      lng: float,
      name: string,
      description: string,
      price: float,
      createdAt: string,
      updatedAt: string,
      numReviews: number,
      avgRating: float,
      SpotImages: [
        {
          id: number,
          url: string,
          preview: boolean,
        },
        {
          id: number,
          url: string,
          preview: boolean,
        },
      ],
      Owner: {
        id: number,
        firstName: string,
        lastName: string,
      },
    },
  },
  // Again the idea here is to have separate slices for different categories of resources from your API. Organize your spot and user reviews how you see fit, but here is an example. An alternative would be nesting review data under `user` and `spot` slices, respectively.
  reviews: {
    bySpot: {
      [spotId]: [
        {
          id: number,
          userId: number,
          spotId: number,
          review: string,
          stars: number,
          createdAt: string,
          updatedAt: string,
          User: {
            id: number,
            firstName: string,
            lastName: string,
          },
          ReviewImages: [
            {
              id: number,
              url: string,
            },
          ],
        },
      ],
    },
    // When on the user's reviews, use the user slice.
    byUser: {
      [reviewId]: {
        id: number,
        userId: number,
        spotId: number,
        review: string,
        stars: number,
        createdAt: string,
        updatedAt: string,
        User: {
          id: number,
          firstName: string,
          lastName: string,
        },
        Spot: {
          id: number,
          ownerId: number,
          address: string,
          city: string,
          state: string,
          country: string,
          lat: float,
          lng: float,
          name: string,
          price: number,
          previewImage: string,
        },
        ReviewImages: [
          {
            id: number,
            url: string,
          },
        ],
      },
    },
  },
  bookings: {
    bySpot: {
      [spotId]: [
        {
          User: {
            id: number,
            firstName: string,
            lastName: string,
          },
          id: number,
          spotId: number,
          userId: number,
          startDate: string,
          endDate: string,
          createdAt: string,
          updatedAt: string,
        },
      ],
    },
    byUser: {
      [spotId]: {
        id: number,
        spotId: number,
        Spot: {
          id: number,
          ownerId: number,
          address: string,
          city: string,
          state: string,
          country: string,
          lat: float,
          lng: float,
          name: string,
          price: float,
          previewImage: string,
        },
        userId: number,
        startDate: string,
        endDate: string,
        createdAt: string,
        updatedAt: string,
      },
    },
  },
};
```

## MeetUp Store Shape:

The Meetup projects can have a few variations of how the API data is organized. Again, organize in a way that feels natural but try to normalize where you can

```js
store = {
  session: { user: null },
  groups: {
    [groupId]: {
      id: number,
      organizerId: number,
      name: string,
      about: string,
      type: string | boolean,
      private: boolean,
      city: string,
      state: string,
      createdAt: string,
      updatedAt: string,
      numMembers: number,
      GroupImages: [
        {
          id: number,
          url: string,
          preview: boolean,
        },
        {
          id: number,
          url: string,
          preview: boolean,
        },
      ],
      Organizer: {
        id: number,
        firstName: string,
        lastName: string,
      },
      Venues: [
        {
          id: number,
          groupId: number,
          address: string,
          city: string,
          state: string,
          lat: float,
          lng: float,
        },
      ],
      // It would make sense to add a `Members` key here for when you get that data
      Members: [
        {
          id: number,
          firstName: string,
          lastName: string,
          Membership: {
            status: string,
          },
        },
        {
          id: number,
          firstName: string,
          lastName: string,
          Membership: {
            status: string,
          },
        },
        {
          id: number,
          firstName: string,
          lastName: string,
          Membership: {
            status: string,
          },
        },
      ],
    },
  },
  events: {
    [eventId]: {
      id: number,
      groupId: number,
      venueId: number,
      name: string,
      description: string,
      type: string,
      capacity: number,
      price: float,
      startDate: string,
      endDate: string,
      numAttending: number,
      Group: {
        id: number,
        name: string,
        private: boolean,
        city: string,
        state: string,
      },
      Venue: {
        id: number,
        address: string,
        city: string,
        state: string,
        lat: float,
        lng: float,
      },
      EventImages: [
        {
          id: number,
          url: string,
          preview: boolean,
        },
        {
          id: number,
          url: string,
          preview: boolean,
        },
      ],
      // It would make sense to add `Attendees` key here for when you get that data.
      Attendees: [
        {
          id: number,
          firstName: string,
          lastName: string,
          Attendance: {
            status: string,
          },
        },
        {
          id: number,
          firstName: string,
          lastName: string,
          Attendance: {
            status: string,
          },
        },
        {
          id: number,
          firstName: string,
          lastName: string,
          Attendance: {
            status: string,
          },
        },
      ],
    },
  },
};
```
