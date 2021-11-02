// Type Aliases com Intersection

type AccountInfo = {
    id: number;
    name: string;
    // a "?" faz com que o valor sejá opcional
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: 'Lucas'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: 'luqnex',
    level: 2
}

// A intersection faz que o PlayerInfo recaba o tipo AccountInfo e CharInfo
type PlayerInfo = AccountInfo & CharInfo

const data: PlayerInfo = {
    nickname: 'luqnex',
    level: 100,
    id: 50,
    name: 'Lucas Costa'
}