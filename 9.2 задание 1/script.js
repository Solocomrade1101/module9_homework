const parser = new DOMParser();

const xmlString = `
   <list>
      <student>
         <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
         </name>
         <age>35</age>
         <prof>teacher</prof>
      </student>

      <student>
         <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
         </name>
         <age>58</age>
         <prof>driver</prof>
      </student>
   </list>
`;
const xmlDom = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDom.querySelector('list');
const studentNode1 = listNode.getElementsByTagName('student')[0];
const nameNode1 = studentNode1.querySelector('name');
const firstNode1 = nameNode1.querySelector('first');
const secondNode1 = nameNode1.querySelector('second');
const ageNode1 = studentNode1.querySelector('age');
const profNode1 = studentNode1.querySelector('prof');

const studentNode2 = listNode.getElementsByTagName('student')[1];
const nameNode2 = studentNode2.querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNode2.querySelector('age');
const profNode2 = studentNode2.querySelector('prof');

const langAttr1 = nameNode1.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');



const result = {
   list: [
      { name: firstNode1.textContent + ' ' + secondNode1.textContent, age: Number(ageNode1.textContent), prof: profNode1.textContent, Lang: langAttr1 },
      { name: firstNode2.textContent + ' ' + secondNode2.textContent, age: Number(ageNode2.textContent), prof: profNode2.textContent, Lang: langAttr2 }
   ]
}
console.log(result);


