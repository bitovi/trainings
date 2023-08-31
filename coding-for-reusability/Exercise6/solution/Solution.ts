type Identity = string | number | { id: number | string }

function identity<ID extends Identity>(value: string, id: ID): { name: string, identifier: ID } {
    return {
        name: value,
        identifier: id
    }
}


identity('Christina', 12345)