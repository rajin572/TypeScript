type area = {
    height: number,
    weight: number
}

type areaString = {
    [key in keyof area] : area[key]
}

