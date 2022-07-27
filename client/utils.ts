export function dateFromLocaleDateString(stringifiedDate: string): Date {
    const splitedTime = stringifiedDate.split(", ");
    const date = splitedTime[0].split(".").reverse();
    const reversedDate = date.reduce((c, p, index) => {
        c += p;
    
        if (index !== date.length - 1) c += "-";
        return c;
    }, "");

    return new Date(reversedDate + "T" + splitedTime[1]);
};