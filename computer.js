const motherboardAddons = () => ({
    "LEDs for switches": 50,
    "DDR-5 Memory Modules": 200,
    "GPU Bridge": 400,
    "Dedicate Water Pump Headers": 300
})

const cpuAddons = () => ({
    "L3 Cache": 150,
    "Graphics Accelerator": 300,
    "Liquid Cooling": 300
})

const ramAddons = () => ({

    "DDR Chip Type": 200,
    "Error Checking Parity": 100
})


const gpuAddons = () => ({

    "Concurrent Processing": 350,
    "Variable Pixel Shading": 400
})
const getComponentPrice = (basePrice, addonPrices) => (addons) => {
    let total = basePrice;

    if (addons === undefined) {
        return basePrice;
    }

    for (let addon of addons) {
        addon = addon.trim();
        if (addonPrices[addon]) {
            total += addonPrices[addon];
        }
    }

    return total;
}

const getLocationCharge = (location, mb, cpu, ram, gpu) => {
    switch (location) {
        case "Byte Space":
            return 0.02 * mb + 0.03 * cpu + 0.025 * ram + 0.04 * gpu;
        case "Encryptionia":
            return 0.03 * mb + 0.02 * cpu + 0.03 * ram + 0.03 * gpu;
        case "Compression Land":
            return 0.025 * mb + 0.04 * cpu + 0.015 * ram + 0.05 * gpu;
        default:
            return 0;
    }
}

const main = () => {
    const baseComputerPrice = 200;

    const motherboard = getComponentPrice(200, motherboardAddons())
    const cpu = getComponentPrice(200, cpuAddons())
    const gpu = getComponentPrice(300, gpuAddons())
    const ram = getComponentPrice(100, ramAddons())

    const location = "Compression Land";
    const MBValue = motherboard(["LEDs for switches", "DDR-5 Memory Modules"]);
    const CPUValue = cpu(["Liquid Cooling"]);
    const RamValue = ram(["DDR Chip Type"]);
    const GPUValue = gpu();

    const totalComponentValue = MBValue + CPUValue + RamValue + GPUValue;
    const locationCost = getLocationCharge(location, MBValue, CPUValue, RamValue, GPUValue)

    return locationCost + baseComputerPrice + totalComponentValue + (0.2 * totalComponentValue);
}

console.log(main())