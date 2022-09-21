type TAbouts = {
        _id: string
        description: string
        imgUrl: any
        title: string
}

type TWorks ={
    _id: string
    description: string
    imgUrl: any
    title: string,
    codeLink: string,
    projectLink: string,
    tags:array
}

type TConfigSanity = {
    projectId?: string
    dataset: string
    apiVersion:string
    useCdn:boolean
    token?:string
}