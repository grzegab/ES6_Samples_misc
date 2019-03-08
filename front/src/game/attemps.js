let attemp = 1;

export const increaseAttemps = () => {
    attemp++;
};

export const getAttempsCount = () => {
    return attemp;
};