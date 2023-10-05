var Data = [
    {
        id: 1,
        firstname: "Muhammad",
        lastname: "Jaffer",
        email: "mjaffer720@gmail.com",
        password: "*******",
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    }
]
console.log("Data", Data)
export const addFormData = (data) => {
    var newData = [...Data];
    newData.push(data);
    Data = newData;
    console.log("Data", Data)
};

export { Data };
