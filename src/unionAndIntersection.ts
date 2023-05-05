type noob = {
    name: string,
}

type junior = noob &{
    position: string,
    expertise: string
}

enum Level {  // enum isn't recommanded in TypeScript
    junior=  'junior',
    senior = 'senior',
    mid = 'mid'

}

type nextLevel = junior & { // & sign reffers to intersection
    experience: number
    // level: Level,
    level: 'junior' | 'mid' | 'senior'
}

const developer: junior | nextLevel = { // | sing reffers to union
    name: 'rajin',
    position: 'web developer', 
    expertise: 'react',
    experience: 5,
    // level: Level.junior
    level: 'senior'
} 