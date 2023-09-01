type IdentityType = string | number

interface FormattedIdentity<ID> {
    name: string, 
    identifier: ID
}

function formatIdentity<ID extends IdentityType>(value: string, id: ID): FormattedIdentity<ID> {
    return {
        name: value,
        identifier: id
    }
}

formatIdentity('Christina', 12345)
formatIdentity<string>('Christina', "12345")
formatIdentity('Christina', { id: 12345})

export {};