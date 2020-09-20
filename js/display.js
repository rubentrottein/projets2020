addEventListener('load', function (e){
    var j=0;
    for (let i=7; i<13;i++){
        document.getElementsByTagName("article")[i].innerHTML=(
            `
            <h2>`+title[j].name+`
            <i>`+title[j].date+`</i></h2>
            <aside>
                <a href='#title'>
                    <img src='img/imageb`+ (j+1) +`.jpg' alt='`+title[j].name+`' />
                </a>
                <p>`+ title[j].description +`</p>
            </aside>`
        );
        j++;
    }
    
    document.getElementsByTagName("aside")[0].innerHTML =  `
    <a href='#title'>
        <img src='img/imageb1.jpg' alt='`+title[0].name+`' />
    </a>
    <table>
        <th></th>
        <th>PlayStation 5</th>
        <th>PlayStation 5 All-Digital Edition</th>
        <tr>
            <td>CPU</td>
            <td>
                <ul>
                    <li>CPU Zen 8 cœurs cadencé à 3,5 GHz (fréquence variable</li>
                    <li>Gravé sur SoC AMD Ryzen 3e génération 7nm</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>CPU Zen 8 cœurs cadencé à 3,5 GHz (fréquence variable)
                    </li>- Gravé sur SoC AMD Ryzen 3e génération 7nm</li>
                </ul>
            </td>
        </tr>
        <tr>		
            <td>GPU</td>
            <td>
                <ul>
                    <li>AMD RDNA 2 d'une puissance de 10,28 TFLOPS avec Ray Tracing</li>
                    <li>Gravé sur SoC AMD Ryzen 3e génération 7nm</li>
                </ul>
            </td>
                <td>
                    <li>AMD RDNA 2 d'une puissance de 10,28 TFLOPS avec Ray Tracing</li>
                <li>Gravé sur SoC AMD Ryzen 3e génération 7nm</li>
            </td>
        </tr>
        <tr>
            <td>Architecture GPU</td>
            <td>RDNA 2 optimisé</td>
            <td>RDNA 2 optimisé</td>
        </tr><tr>
            <td>Mémoire / Interface</td>
            <td>16Go GDDR6 / 256-bit</td>
            <td>16Go GDDR6 / 256-bit</td>
        </tr><tr>
            <td>Bande passante mémoire</td>
            <td>448 Go/s</td>
            <td>448 Go/s
        </tr><tr>
            <td>Stockage interne</td>
            <td>SSD 825 Go avec contrôleurs mémoire spéciaux</td>
            <td>SSD 825 Go avec contrôleurs mémoire spéciaux</td>
        </tr><tr>
            <td>Bande passante stockage</td>
            <td>5,5Go/s (Raw), 8-9GB/s (Compressé)</td>
            <td>5,5Go/s (Raw), 8-9GB/s (Compressé)</td>
        </tr><tr>
            <td>Stockage amovible</td>
            <td>Emplacement SSD NVMe au format CF Card</td>
            <td>Emplacement SSD NVMe au format CF Card</td>
        </tr><tr>
            <td>Prise en charge stockage externe</td>
            <td>Prise en charge des disques durs externes via USB</td>
            <td>Prise en charge des disques durs externes via USB</td>
        </tr><tr>
            <td>Lecteur optique</td>
            <td>4K UHD Blu-ray</td>
            <td>Non</td>
        </tr>
    </table>
    `;
});