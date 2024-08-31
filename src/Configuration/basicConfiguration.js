const saltRoundConfigvar = 10

const algJsonForJWTConfigVar = {
    seller: 'HS256',
    user: 'HS512',
    admin: 'Hs384'
}
export{saltRoundConfigvar, algJsonForJWTConfigVar}