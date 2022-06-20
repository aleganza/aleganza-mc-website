package es2file;
import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String filename, ext;

        /* inserimento nome e estensione */
        System.out.println("FILE INIZIALE\n");
        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserisci nome del file");
        filename = scanner.nextLine();
        System.out.println("Inserisci estensione del file");
        ext = scanner.nextLine();
        filename = filename + "." + ext;/**/



        /* System.out.println(filename); */

        /* creation e controllo esistenza file */
        File file = new File(filename);
        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        System.out.println("FILE NUOVO\n");
        File file2 = new File("minime.txt");
        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file2.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        /* inizio lettura */
        int n; //lughezza minima idoneità parole
        System.out.println("Inserisci lunghezza");
        n = scanner.nextInt();

        /* file reading */

        try {
            String data; //parola
            Scanner myReader = new Scanner(file); //lettura file
            FileWriter myWriter = new FileWriter(file2); //scrittura file
            while(myReader.hasNextLine()){
                for(int i=0; i<20; i++){
                    data = myReader.nextLine();
                    if(data.length() >= n){
                        myWriter.write(data);
                        myWriter.write("\n");
                    }
                }
            }
            myReader.close();
            myWriter.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        scanner.close();
    }
}