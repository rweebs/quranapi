fetch('https://api.alquran.cloud/v1/surah/2?offset=0&limit=5')
  .then(response => response.json())
  .then(data => {
    let output = '<h2>Surah Al-Baqarah Verse 1-5</h2>';
    output += `
        <ol>
          <li >${data.data.ayahs[0].text}</li>
          <li >${data.data.ayahs[1].text}</li>
          <li >${data.data.ayahs[2].text}</li>
          <li >${data.data.ayahs[3].text}</li>
          <li >${data.data.ayahs[4].text}</li>
        </ol>
      `;

    document.getElementById('output').innerHTML = output;
    console.log(data.data.ayahs) // Prints result from `response.json()` in getRequest
    })
