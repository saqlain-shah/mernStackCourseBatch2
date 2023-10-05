var Data = [
    {
        id: 1,
        name: "jfaslk",
        age: 43,
        email: "fjdak@dfsld.com",
        phoneNumber: 12345678,
        course: "C++",
        address: "jfkkdfmaflam",
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
