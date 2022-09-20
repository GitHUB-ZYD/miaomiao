export default {
    path :"/movie",
    component:()=> import("@/views/Movie"),
    children:[
        {
            path:"city",
            component:()=> import("@/components/city")
        },
        {
            path:"nowplaying",
            component:()=> import("@/components/nowplaying")
        },
        {
            path:"search",
            component:()=> import("@/components/search")
        },
        {
            path:"cinemasoon",
            component:()=> import("@/components/cinemasoon")
        },
        {
            path:"/movie",
            redirect:"/movie/nowplaying"
        }
    ]
}