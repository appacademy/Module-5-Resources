import { createContext, useEffect, useRef, useState } from 'react';

export const GlobalState = createContext();


//! you airbnb-ers might appreciate my using this object lolol

type user = null | Record<String, any>

const store = {
  session: {},
  spots: {},
  reviews: {}
}

var bigData = {
  session: {
    user: {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@gmail.com",
      username: "JohnSmith",
    },
  },
  spots: {
    1: {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
    2: {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
    3: {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
    4: {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
    5: {
      id: 1,
      ownerId: 1,
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      createdAt: "2021-11-19 20:39:36",
      updatedAt: "2021-11-19 20:39:36",
      avgRating: 4.5,
      previewImage: "image url",
    },
  },
  spotDetails: {
    id: 1,
    ownerId: 1,
    address: "123 Disney Lane",
    city: "San Francisco",
    state: "California",
    country: "United States of America",
    lat: 37.7645358,
    lng: -122.4730327,
    name: "App Academy",
    description: "Place where web developers are created",
    price: 123,
    createdAt: "2021-11-19 20:39:36",
    updatedAt: "2021-11-19 20:39:36",
    numReviews: 5,
    avgStarRating: 4.5,
    SpotImages: [
      {
        id: 1,
        url: "image url",
        preview: true,
      },
      {
        id: 2,
        url: "image url",
        preview: false,
      },
    ],
    Owner: {
      id: 1,
      firstName: "John",
      lastName: "Smith",
    },
  },
  reviews: {
    userReviews: [
      {
        id: 1,
        userId: 1,
        spotId: 1,
        review: "This was an awesome spot!",
        stars: 5,
        createdAt: "2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36",
        User: {
          id: 1,
          firstName: "John",
          lastName: "Smith",
        },
        Spot: {
          id: 1,
          ownerId: 1,
          address: "123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "App Academy",
          price: 123,
          previewImage: "image url",
        },
        ReviewImages: [
          {
            id: 1,
            url: "image url",
          },
        ],
      },
    ],
    spotReviews: [
      {
        id: 1,
        userId: 1,
        spotId: 1,
        review: "This was an awesome spot!",
        stars: 5,
        createdAt: "2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36",
        User: {
          id: 1,
          firstName: "John",
          lastName: "Smith",
        },
        ReviewImages: [
          {
            id: 1,
            url: "image url",
          },
        ],
      },
    ],
  },
  bookings: {
    userBookings: [
      {
        id: 1,
        spotId: 1,
        Spot: {
          id: 1,
          ownerId: 1,
          address: "123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "App Academy",
          price: 123,
          previewImage: "image url",
        },
        userId: 2,
        startDate: "2021-11-19",
        endDate: "2021-11-20",
        createdAt: "2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36",
      },
    ],
    spotBookings: [
      {
        User: {
          id: 2,
          firstName: "John",
          lastName: "Smith",
        },
        id: 1,
        spotId: 1,
        userId: 2,
        startDate: "2021-11-19",
        endDate: "2021-11-20",
        createdAt: "2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36",
      },
    ],
  },
  spotSearch: {
    results: [
      {
        id: 1,
        ownerId: 1,
        address: "123 Disney Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123,
        createdAt: "2021-11-19 20:39:36",
        updatedAt: "2021-11-19 20:39:36",
        previewImage: "image url",
      },
    ],
    page: 2,
    size: 25,
  },
};

export default function GlobalStateProvider(props) {

  //! big data?

  //! if we had big data we also need a way to manage it...

  //! managing big data is a problem for...

  //! STATE MACHINES

  //! badum-tss

  return (
    <GlobalState.Provider value={bigData}>
      {props.children}
    </GlobalState.Provider>
  )
}

// todo: write functions that can perform all crud on each slice
// approaches:
  // have no globally available api data (something your boss decides)

  // write as many crud functions as your api has in each route

  // spread it out for sanity's sake. more code, more files.

  // create functions to hit api for each slice, then reduce into globalState

  // figure out why nothing is rerendering. there must be stale references somewhere...

  // puzzle over how to keep spotDetails from rerendering when you just add a review

  // buy your boss a coffee because she's mad it's taking so long

  // write hooks that can reach into any nested slice to grab a specific
  // object, then trigger a rerender if the ref is new

  // write 10 pages of internal documentation to keep people from using your
  // functions wrong, but they'll do it wrong anyway because no-one reads instructions.
  
  // TODO: Steps
  // 1. hope to god you made new refs for each object you're mutating
  // 2. convince your team this was a great idea
  // 3. ...
  // 4. profit

  // NOTE: make sure you're on holiday when this thing breaks

  /*
  OR OR OR
  use a popular lib that does it for you: Redux.
  */



const subscribers = new Set()

var ReduxStore = {}

export var useSelector = (fn) => {
  const [getter, forceRender] = useState()
  const isRegistered = useRef(null)

  if(!isRegistered) {
    subscribers.add(fn)
  }

  forceRender(fn(ReduxStore))
  
  return getter
}