type fetchedData = { status: string, data: number[] }

function fetchData(url: string): Promise<fetchedData> {
    return new Promise<fetchedData>((resolve, reject) => {
        setTimeout(() => {
            if (url == "success") {
                resolve({
                    status: "success",
                    data: [1, 2, 3, 4, 5]
                });
            } else if(url =="error"){
                reject("Error on fecth 404")
            }else{
                reject("Invalid URL")
            }
        }, 2000);
    })
}

function processData(fetchedData: fetchedData): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
        setTimeout(()=>{
            resolve(fetchedData.data.map(num => num*2));
        },1000)
    })
}

function displayData(numbers: number[]): Promise<void> {
    return new Promise<void>((res)=>{
        console.log(numbers);
        res();
    })
}

async function  fetchAndProcessData(url: string){
    try {
        const fetchedData = await fetchData(url);
        const processedData = await processData(fetchedData);
        await displayData(processedData);
    } catch (error) {
        console.log(error)
    }
}

fetchAndProcessData("success");
fetchAndProcessData("error");
fetchAndProcessData("other");