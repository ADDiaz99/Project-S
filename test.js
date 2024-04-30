for(let nota_3 = 0; nota_3 < 8; nota_3 += 0.1){
    if(nota_1 * 0.3 + nota_2 * 0.3 >= 3){
        result = "Ya pasaste!\n";
    }

    else if(nota_1 * 0.3 + nota_2 * 0.3 + nota_3 * 0.4 >= 3){
        if(nota_3 > 5){
            result = "Deberías cancelar la materia, para pasar necesitas: " + nota_3.toFixed(1);
            break;
        }
        result = "Para pasar necesitas: " + nota_3.toFixed(2) + "\nMucha suerte!"
        break;
    }
}