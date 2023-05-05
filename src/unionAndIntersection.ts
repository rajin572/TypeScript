type noob = {
    name: string,
}

type junior = noob &{
    position: string,
    expertise: string
}

enum Level {
    junior=  'junior',
    senior = 'senior',
    mid = 'mid'

}

type nextLevel = junior & {
    experience: number
    // level: Level,
    level: 'junior' | 'mid' | 'senior'
}

const developer: junior | nextLevel = {
    name: 'rajin',
    position: 'web developer', 
    expertise: 'react',
    experience: 5,
    // level: Level.junior
    level: 'senior'
} 