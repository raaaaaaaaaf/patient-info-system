import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Page, Text, View, Document, StyleSheet, pdf, Image, Font, Line } from '@react-pdf/renderer';


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Oswald',
        padding: 40,
      },
      top : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      leftlogo: {
        width: "20%",
        marginLeft: 'auto',
      },
      rightlogo: {
        width: "20%",
        marginRight: 'auto',
      },
      image: {
        width: '100%',
        height: 'auto',
      },
      title: {
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
      },
      author: {
        fontSize: 10,
        textAlign: "center",
      },
      columnsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      column: {
        width: '55%', // Adjust the width as needed
      },
      columnrow: {
        flexDirection: 'row',
      },
      column3: {
        width: '33.33%', // Divide the page into three columns
        padding: 5,    
      },
      subtext: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      sub1text: {
        fontSize: 12,
      },
      nametext: {
        fontSize: 12,
        marginTop: 35,
        marginLeft: 100,
        textDecoration: 'underline',
      },
      nursetext: {
        fontSize: 10,
        marginLeft: 110,
        marginBottom: 10,
      },
      text: {
        fontSize: 10,
        marginBottom: 5,
      },
      care: {
        fontSize: 8,
      },
      text2: {
        fontSize: 10,
      },
      line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
      },
      line2: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginBottom: 10,
      },
      diagnosis: {
        fontSize: 10,
        marginTop: 25,
      },
      medlab: {
        fontSize: 10,
        marginTop: 25,
      },
      line3: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 30,
      },
      line4: { 
        width: 1, 
        backgroundColor: 'black', 
        marginLeft: 10, 
        marginRight: 10 
    },
      columnsContainer1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      column1: {
        width: '80%', // Adjust the width as needed
      },
      column2: {
        width: '20%', // Adjust the width as needed
      },
      footer: {
        fontSize: 8,
        marginTop: 40,
        textAlign: 'center',
        color: 'grey',
      },
});

const PDFRecord = () => {
  const [docsData, setDocsData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const recordRef = doc(db, 'recordData', id);

    const fetchData = async () => {
      try {
        const docSnapshot = await getDoc(recordRef);

        if (docSnapshot.exists()) {
            setDocsData({ ...docSnapshot.data(), id: docSnapshot.id });
        } else {
            setDocsData({});
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setDocsData({});
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Once pregnancy data is fetched, generate and display the PDF
    const generatePDF = () => {
      const PDF = (
        <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.top}>
                {/* <View style={styles.leftlogo}>
                  <Image style={styles.image} src={logo}></Image>
                </View> */}
                <Text style={styles.author}>Patient Information System (PISYS)</Text>
                <Text style={styles.title}>INDIVIDUAL TREATMENT RECORD</Text>
                
                {/* <View style={styles.rightlogo}>
                  <Image style={styles.image} src={logo}></Image>
                </View> */}
              
              </View>
                <View style={styles.line}></View>
                    <Text style={styles.subtext}>I. PATIENT INFORMATION (IMPORMASYON NG PASYENTE)</Text>
                <View style={styles.line2}></View>
                <View style={styles.columnsContainer}>
                {/* Left Column */}
                <View style={styles.column}>

                    <Text style={styles.text}>Full Name: {docsData.fullName}</Text>
                    <Text style={styles.text}>Age: {docsData.age} y/o</Text>
                    <Text style={styles.text}>Birth Date: {docsData.bod} </Text>
                    <Text style={styles.text}>Address: {docsData.address} </Text>
                    <Text style={styles.text}>Civil Status: {docsData.civil} </Text>
                </View>
                {/* Right Column */}
                <View style={styles.column}>
                    <Text style={styles.text}>Suffix (e.g. Jr., Sr., II, III) {docsData.suffix} </Text>
                    <Text style={styles.text}>Sex: {docsData.sex} </Text>
                    <Text style={styles.text}>Birth Place: {docsData.bop} </Text>
                    <Text style={styles.text}>Blood Type: {docsData.bloodtype} </Text>
                    <Text style={styles.text}>Contact No.: {docsData.cp} </Text>
                </View>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.sub1text}>II. ASSESSMENT</Text>
                <View style={styles.line2}></View>

                <View style={styles.columnsContainer}>
                {/* Left Column */}
                <View style={styles.column}>
                    <Text style={styles.text}>Date of Consultation: {new Date(docsData.timeStamp.seconds * 1000).toLocaleDateString("en-US")} </Text>
                    <Text style={styles.text}>Blood Pressure: {docsData.bp} </Text>
                    <Text style={styles.text}>Height: {docsData.height} </Text>
                    <Text style={styles.text}>Boday Mass Index: {docsData.bmi} </Text>
                </View>
                {/* Right Column */}
                <View style={styles.column}>
                    <Text style={styles.text}>Consultation Time: {new Date(docsData.timeStamp.seconds * 1000).toLocaleTimeString("en-US")} </Text>
                    <Text style={styles.text}>Temperature: {docsData.temp} </Text>
                    <Text style={styles.text}>Weight: {docsData.weight} </Text>
                    <Text style={styles.text}>Pulse Rate: {docsData.pr} </Text>
                </View>
                </View>
                <View style={styles.line}></View>

                <View style={styles.columnsContainer}>
                {/* Left Column */}
                <View style={styles.column}>
                    <Text style={styles.text}>Nature of Visit: {docsData.visit} </Text>
                    <Text style={styles.text}>Name of Attending Provider: {docsData.staff} </Text>
                </View>
                {/* Right Column */}
                <View style={styles.column}>
                    <Text style={styles.text}>Type of Consultation / Purpose of visit: {docsData.type} </Text>
                    <Text style={styles.text}>Chief Complaints: {docsData.chief} </Text>
                </View>
                </View>
                <View style={styles.line2}></View>

                <Text style={styles.diagnosis} >Diagnosis: {docsData.diagnosis} </Text>

                <View style={styles.line3}></View>

                
                <View style={styles.columnsContainer1}>
                {/* Left Column */}
                <View style={styles.column1}>
                    <Text style={styles.medlab}>Medication Treatment: {docsData.medication} </Text>
                </View>
                {/* Right Column */}
                <View style={styles.column2}>
                <View style={styles.line4}></View>
                    <Text style={styles.care}>Name of Health Care Provider:  </Text>
                    <Text style={styles.care}>{docsData.nhcp}</Text>
                </View>
                </View>
                <View style={styles.line3}></View>

                <View style={styles.columnsContainer1}>
                {/* Left Column */}
                <View style={styles.column1}>
                    <Text style={styles.medlab}>Laboratory Findings / {docsData.laboratory} </Text>
                    <Text style={styles.text2}>Impression:</Text>
                </View>
                {/* Right Column */}
                <View style={styles.column2}>
                <View style={styles.line4}></View>
                    <Text style={styles.care}>Performed Laboratory Test:  </Text>
                    <Text style={styles.care}>{docsData.plt}</Text>
                </View>
                </View>
                <View style={styles.line3}></View>


                <Text style={styles.footer} fixed>~ System generated document ~</Text>
            </Page>
        </Document>
      );

      pdf(PDF).toBlob().then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url);
      });
    };

    // Only generate PDF when pregnancy data is available
    if (docsData.id) {
      generatePDF();
      navigate('/dashboard/patient')
    }
  }, [docsData]);

  return null;
};

export default PDFRecord;
