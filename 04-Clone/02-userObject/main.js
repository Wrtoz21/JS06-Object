const state1 = 
{ username: 'john', point: 100, loading: true };

// const state2 =
// {username: 'john', point: 75, loading: false };
Object.assign(state1,state2);
console.log(state1)

const state2 =Object.assign({},state1),
{loading : false }, {point:75}, success:true });
