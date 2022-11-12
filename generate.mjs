import * as faker from 'faker';
import * as _ from "lodash";

module.exports = function(){
 //   var faker = require("faker");
 //   var _ = require("lodash");
    return {
        mailingList: [],
        vehicles: [{
            model: "Jumper J-1",
            tagline: "Commuting Convenience",
            modelYear: "2018",
            thumbnail: "/images/thumbnails/jumper/jumper-red-thumbnails00.jpg",
            colors: [
                ["White Dwarf", "/images/thumbnails/jumper/jumper-white-thumbnails10.jpg", "white"],
                ["Red Giant", "/images/thumbnails/jumper/jumper-red-thumbnails10.jpg", "red"]
            ],
            carouselImage: "/images/carousel/jumper-01.jpg",
            altText: "2018 Jumper J-1",
            caption: "2018 Jumper J-1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
            detailKey: "jumper",
            msrp: 36000,
            options: {
                engines: [{
                    name: "Alpha Centauri Mark II",
                    image: "/images/engines/engine1.jpg",
                    cost: 0,
                    nmpg: 75,
                    thrust: "245 kN",
                    topspeed: 20
                }, {
                    name: "Singularity Engine Mark V",
                    image: "/images/engines/engine2.jpg",
                    cost: 2250,
                    nmpg: 55,
                    thrust: "545 kN",
                    topspeed: 60
                }]
            }
        }, {
            model: "Spidi GT",
            tagline: "Your Ultimate Getaway Car",
            modelYear: "2018",
            thumbnail: "/images/thumbnails/spidi/spidi-blue-thumbnails00.jpg",
            colors: [
                ["White Dwarf", "/images/thumbnails/spidi/spidi-white-thumbnails10.jpg", "white"],
                ["Black Hole", "/images/thumbnails/spidi/spidi-black-thumbnails10.jpg", "black"],
                ["Red Giant", "/images/thumbnails/spidi/spidi-red-thumbnails10.jpg", "red"],
                ["Main Sequence Blue", "/images/thumbnails/spidi/spidi-blue-thumbnails10.jpg", "blue"],
                ["Solar Yellow", "/images/thumbnails/spidi/spidi-yellow-thumbnails10.jpg", "yellow"]
            ],
            carouselImage: "/images/carousel/spidi-01.jpg",
            altText: "2018 Spidi - Your Ultimate Getaway Car",
            caption: "2018 Spidi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
            detailKey: "spidi",
            msrp: 42000,
            options: {
                engines: [{
                    name: "Boson Accelerator Mark III",
                    image: "/images/engine3.jpg",
                    cost: 0,
                    nmpg: 75,
                    thrust: "245 kN",
                    topspeed: 20
                }, {
                    name: "Singularity Engine Mark V",
                    image: "/images/engines/engine2.jpg",
                    cost: 2250,
                    nmpg: 55,
                    thrust: "545 kN",
                    topspeed: 60
                }]
            }
        }, {
            model: "AirBike",
            tagline: "New Perspective on Fun",
            modelYear: "2018",
            thumbnail: "/images/thumbnails/air-bike/air-bike-purple-thumbnails00.jpg",
            colors: [
                ["Nebula Purple", "/images/thumbnails/air-bike/air-bike-purple-thumbnails10.jpg", "purple"],
                ["Main Sequence Blue", "/images/thumbnails/air-bike/air-bike-blue-thumbnails10.jpg", "blue"],
                ["Black Hole", "/images/thumbnails/air-bike/air-bike-black-thumbnails10.jpg", "black"],
                ["Solar Yellow", "/images/thumbnails/air-bike/air-bike-yellow-thumbnails10.jpg", "yellow"]
            ],
            carouselImage: "/images/carousel/air-bike-01.jpg",
            altText: "2018 AirBike",
            caption: "2018 AirBike",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
            detailKey: "air-bike",
            msrp: 18500,
            options: {
                engines: [{
                    name: "Alpha Centauri Mark II",
                    image: "/images/engines/engine1.jpg",
                    cost: 0,
                    nmpg: 75,
                    thrust: "245 kN",
                    topspeed: 20
                }, {
                    name: "Singularity Engine Mark V",
                    image: "/images/engines/engine2.jpg",
                    cost: 2250,
                    nmpg: 55,
                    thrust: "545 kN",
                    topspeed: 60
                }]
            }
        }, {
            model: "Mercury",
            tagline: "Professional Grade Affordable Fleets.",
            modelYear: "2018",
            thumbnail: "/images/thumbnails/mercury/mercury-white-thumbnails00.jpg",
            colors: [
                ["White Dwarf", "/images/thumbnails/mercury-white.jpg", "white"]
            ],
            carouselImage: "/images/carousel/mercury-01.jpg",
            altText: "Mercury Spacefaring Commercial Transport",
            caption: "Mercury Spacefaring Commercial Transport",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper quam eu velit commodo sagittis. Nam at massa finibus, placerat nulla ac, aliquam mauris. Aenean a libero id odio molestie consectetur id vitae felis. Curabitur vitae lectus consequat, vestibulum orci ut, pulvinar dui. Curabitur cursus cursus tortor gravida tempus. Phasellus eget sagittis lorem. Integer elementum, diam vel sagittis tincidunt, arcu velit sollicitudin mi, eu molestie purus nisl in nulla. Fusce volutpat metus ut metus rhoncus aliquam.",
            detailKey: "mercury",
            msrp: 167000,
            options: {
                engines: [{
                    name: "Mercury Mark VI",
                    image: "/images/engines/engine4.jpg",
                    cost: 0,
                    nmpg: 75,
                    thrust: "245 kN",
                    topspeed: 20
                }]
            }
        }],
        dealerships: _.times(100, function(n){
            let foo = "bar";
            return{
                id: n,
                dealershipName: faker.name.findName() + "'s Flying Cars",
                address: faker.address.streetAddress("####"),
                city: faker.address.city(),
                state: faker.address.state(),
                zip: faker.address.zipCode(),
                phone: faker.phone.phoneNumber()
            }
        })
    }
}