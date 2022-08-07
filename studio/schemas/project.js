export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
        },
        {
            name:"date",
            title:"Date",
            type:"datetime",

        },
        {
            name:"place",
            title:"Project Name",
            type:"string"
        },
        {
            name:"description",
            title:"Description",
            type:"text"
        },
        {
            name:"projectType",
            title:"Project Type",
            type:"string",
            options:{
                list:[
                    {value:"personal",title:"Personal"},
                    {value:"client",title:"Client"},
                    {value:"school",title:"School"},
                   

                ]
            }
        },
        {
            name:"link",
            title:"Link",
            type:"url"
        },
        {
            name:"tags",
            title:"Tage",
            type:"array",
            of:[
                {
                    type:"string",
                }
            ],
            options:{
                layout:"tags"
            }
        }
    ]
}