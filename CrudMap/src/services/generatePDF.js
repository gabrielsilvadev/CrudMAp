import React from 'react';
import {RNHTMLtoPDF} from 'react-native-html-to-pdf'

async function generatePDF(data){
  const generateHTML = value =>
  data.map(item =>{ `<div>
    <span>Hi ${item.name}, how are you?
    </span>
    </div>`});
    const html = generateHTML(this.state.value);

    const options = {html,
        fileName: "test",
        directory: "Documents"
        };
        const file = await RNHTMLtoPDF.convert(options);
        return file
    }

