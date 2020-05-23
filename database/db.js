import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';

const db = SQLite.openDatabase('places.db');

export const init = () => {
    const promise=new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS places(UserName VARCHAR PRIMARY KEY NOT NULL,Password VARCHAR NOT NULL,Email VARCHAR NOT NULL);'
            ,[],
            ()=>{
                //console.log("query executed");
                resolve();
            },
            (_,err)=>{
               // console.log("query NOT executed");
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const insertUser =(userName,password,email) =>{
    const promise=new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('INSERT INTO places (UserName,Password,Email) VALUES (?,?,?);'
                ,[userName,password,email],
                (_,result)=>{
                    console.log("query executed");
                    resolve(result);
                },
                (_,err)=>{
                    console.log("query NOT executed");
                    reject(err);
                }
            );
        });
    });
    return promise;

}

export const checkUser =(userName) =>{
    const promise=new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('SELECT * FROM places WHERE UserName=?'
                ,[userName],
                (_,result)=>{
                    //console.log("query executed");
                    resolve(result);
                },
                (_,err)=>{
                    // console.log("query NOT executed");
                    
                    reject(Alert.alert('Invalid', 'User does not exist'));
                }
            );
        });
    });
    return promise;

}


