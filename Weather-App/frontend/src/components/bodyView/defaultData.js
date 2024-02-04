export const defaultCurrentWeatherData = {
    weather: [{ id: "", main: "", description: "", icon: "" }],

    main: {
        temp: "",
        feels_like: "",
        temp_min: "",
        temp_max: "",
        pressure: "",
        humidity: "",
        sea_level: "",
        grnd_level: "",
    },
    wind: { speed: "", deg: "", gust: "" },
    clouds: { all: "" },
    dt: "",
    sys: {
        type: "",
        id: "",
        country: "",
        sunrise: "",
        sunset: "",
    },
    timezone: "",
    id: "",
    name: "",
    cod: "",
};

export const defualtAverageTemps = [
    {
        date: "0",
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      },

      {
        date: 0,
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      },

      {
        date: 0,
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      },

      {
        date: 0,
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      },

      {
        date: 0,
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      },
      {
        date: 0,
        averageTemp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        description: 0, // Assumi ng the weather description is the same for the day
        icon: 0, // Assuming the weather icon is the same for the day
      }
]

export const defaultForecastData = [
    {
        cod: "",
        message: "",
        cnt: "",
        list: [
            {
                "dt": 1706346000,
                "main": {
                    "temp": 20.68,
                    "feels_like": 19.25,
                    "temp_min": 20.68,
                    "temp_max": 23.81,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 993,
                    "humidity": 17,
                    "temp_kf": -3.13
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.26,
                    "deg": 283,
                    "gust": 5.73
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-27 09:00:00"
            },
            {
                "dt": 1706356800,
                "main": {
                    "temp": 20.2,
                    "feels_like": 18.8,
                    "temp_min": 20.2,
                    "temp_max": 20.75,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 992,
                    "humidity": 20,
                    "temp_kf": -0.55
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.79,
                    "deg": 252,
                    "gust": 4.63
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-27 12:00:00"
            },
            {
                "dt": 1706367600,
                "main": {
                    "temp": 17.37,
                    "feels_like": 15.82,
                    "temp_min": 17.37,
                    "temp_max": 17.37,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 994,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.63,
                    "deg": 266,
                    "gust": 5.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-27 15:00:00"
            },
            {
                "dt": 1706378400,
                "main": {
                    "temp": 15.91,
                    "feels_like": 14.13,
                    "temp_min": 15.91,
                    "temp_max": 15.91,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 994,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 2.14,
                    "deg": 292,
                    "gust": 3.22
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-27 18:00:00"
            },
            {
                "dt": 1706389200,
                "main": {
                    "temp": 14.06,
                    "feels_like": 12.15,
                    "temp_min": 14.06,
                    "temp_max": 14.06,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 993,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 304,
                    "gust": 1.69
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-27 21:00:00"
            }
        ],
        city: {
            id: "",
            name: "",
            coord: {
                lat: "",
                lon: "",
            },
            country: "",
            population: "",
            timezone: "",
            sunrise: "",
            sunset: "",
        },
    }
];



