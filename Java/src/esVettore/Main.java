/*
Realizzare un programma Java che richiede l'input di 5 valori interi per inizializzare un vettore.
Al termine esegue:
- visualizzazione del vettore.
- calcolo della media dei valori del vettore.
- ordinamento in modo crescente del vettore.
- stampa del vettore.
*/

package esVettore;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        int n = 5; //lunghezza vettore
        float media = 0;
        int vet[] = new int[n];
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try{
            for(int i=0; i<n; i++){
                System.out.println("Inserisci valore "+(i+1)+".");
                vet[i] = Integer.parseInt (reader.readLine());
            }
            System.out.println("Stampa del vettore: ");
            for(int i=0; i<n; i++)
                System.out.println(vet[i]+" ");

            for(int i=0; i<n; i++){
                media += vet[i];
                if(i == n-1)
                    media /= n;
            }
            System.out.println("Media: "+media);

            //ordinamento modo crescente.
            int box;
            for(int i=0; i<n; i++){
                for(int j=i; j<n; j++){
                    if(vet[i] > vet[j]){
                        box = vet[i];
                        vet[i] = vet[j];
                        vet[j] = box;
                    }
                }
            }
            System.out.println("Stampa del vettore ordinato in ordine crescente: ");
            for(int i=0; i<n; i++)
                System.out.println(vet[i]+" ");

        }catch(IOException e){
            System.out.println("--- ERRORE ---");
            e.printStackTrace();
        }
    }
}