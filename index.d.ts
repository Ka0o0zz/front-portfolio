type TAbout = {
    _id: string
    description: string
    imgUrl: any
    title: string
}

type TConfigSanity = {
    projectId?: string
    dataset: string
    apiVersion:string
    useCdn:boolean
    token?:string
}