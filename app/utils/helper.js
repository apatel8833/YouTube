export const formatCompactNumber = number => {
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
}


export const formatDate = number=>{
    if (number<8) {
        return number + " day  "
    }else if (number>=8 &&  number<15) {
        return "1w "
    }
    else if (number>=15 &&  number<24) {
        return "2w "
    } else if (number>=24 &&  number<30) {
        return "3w "
    }else if (number>=30 &&  number<60) {
        return "1m "
    }else if (number>=60 &&  number<90) {
        return "2m "
    }else if (number>=90 &&  number<120) {
        return "3m "
    }else if (number>=120 &&  number<150) {
        return "4m "
    
    }else if (number>=150 &&  number<180) {
        return "5m  "
    }else if (number>=180 &&  number<210) {
        return "6m "
    }else if (number>=210 &&  number<230) {
        return "7m  "
    }
    else if (number>=230 &&  number<260) {
        return "8m "
    }else if (number>=260 &&  number<290) {
        return "9m "
    }else if (number>=290 &&  number<310) {
        return "10m "
    }else if (number>=310 &&  number<340) {
        return "11m "
    }
    else if (number>=340 &&  number<365) {
        return "1y "
    }else if (number>365) {
        return (number/365).toFixed(0) + "y"
    }
}