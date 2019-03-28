const animations = [
    {
        id: 1,
        name: 'Strawberry Scuba',
        url: 'https://thumbs.gfycat.com/ValidLegitimateJaguar-size_restricted.gif',
        liked: false
    },
    {
        id: 2,
        name: 'Marshmellow Death',
        url: 'https://thumbs.gfycat.com/DimwittedMadAgama-size_restricted.gif',
        liked: false
    },
    {
        id: 3,
        name: 'Happy Cubes',
        url: 'https://i.imgur.com/L0ruysj.gif?noredirect',
        liked: false
    },
    {
        id: 4,
        name: "Jumping Jello",
        url: "https://discourse-cloud-file-uploads.s3-us-west-2.amazonaws.com/boingboing/original/3X/a/c/acaa766942e805c05f408c92550c27c390ef65e8.gif",
        liked: false
    },
    {
        id: 5,
        name: "Cheese Death",
        url: "https://editorial.designtaxi.com/editorial-images/news-gif17112016/1.gif",
        liked: false
    },
    {
        id: 6,
        name: "Watermelon Mass Shooting",
        url: "https://i.imgur.com/UPzgfSU.gif",
        liked: false
    },
    {
        id: 7,
        name: "Finger Pulling",
        url: "https://ruinmyweek.com/wp-content/uploads/2016/10/free-animated-gifs-of-gifs-with-faces-drawn-on-pull-my-finger.gif",
        liked: false
    },
    {
        id: 8,
        name: "Playfull Ball",
        url: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/12464411/gubZ6qZuRMC9GqVcYzTV_c6.0.gif",
        liked: false
    },
    {
        id: 9,
        name: "Falling Snow",
        url: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/12464423/5bSgO0TAywbLoAtLQxug_c11.0.gif",
        liked: false
    },
    {
        id: 10,
        name: "Bass Balloons",
        url: "https://media.giphy.com/media/IfjhMgZpwVHB6/giphy.gif",
        liked: false
    },
    {
        id: 11,
        name: "Falling Tower",
        url: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/12464421/70uTSAwUTZm0iNLgXmqA_c10.0.gif",
        liked: false
    }
]
let id = 12; 


module.exports = {
    getAnimations: (req, res) => {
        res.status(200).send(animations)
    },
    deleteAnimation: (req, res) => {
        const {id} = req.params;
        let index = animations.findIndex(animation => {
            return animation.id == id;
        })
        if(index !== -1){
            animations.splice(index, 1)
            res.status(200).send(animations);
        } else {
            res.status(404).send("You crazy!")
        }

    }
}