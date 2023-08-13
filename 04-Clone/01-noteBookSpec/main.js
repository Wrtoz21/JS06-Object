const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

const notebookNEW={};
for(let key in notebook)
{
    notebookNEW[key] = notebook[key];
}
console.log(notebookNEW)

const notebookNEW2={};
Object.assign(notebookNEW2,notebook);
console.log(notebookNEW2);