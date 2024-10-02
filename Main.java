public class Main {
    public static class Node {
         int value;
         Node next;
 
         Node(int data) {
             this.value = data;
         }
     }
 
     public static class LinkedList {
         Node head = null;
         Node tail = null;
 
         void insertAtTheEnd(int value) {
             Node temp = new Node(value);
             if (head == null) {
                 head = temp;
             } else {
                 tail.next = temp;
             }
             tail = temp;
         }
 
         void insertAtTheBeginning(int value) {
             Node temp = new Node(value);
             if (head == null) {
                 head = temp;
                 tail = temp;
             } else {
                 temp.next = head;
                 head = temp;
             }
         }
 
         void insertInBetween(int val, int ind) {
             Node temp = new Node(val);
             Node t = head;
             if (ind == size()) {
                 insertAtTheEnd(val);
             } else if (ind == 0) {
                 insertAtTheBeginning(val);
             } else {
                 for (int i = 0; i < ind - 1; i++) {
                     t = t.next;
                 }
                 temp.next = t.next;
                 t.next = temp;
             }
         }
 
         void display() {
             Node temp = head;
             while (temp != null) {
                 System.out.println(temp.value + " ");
                 temp = temp.next;
             }
         }
 
         int size() {
             int count = 0;
             Node temp = head;
             while (temp != null) {
                 count++;
                 temp = temp.next;
             }
             return count;
         }
        public void deleteAtPosition(int index){
         Node temp=head;
         for(int i=0;i<index-1;i++)
         {
            temp=temp.next;
         }
         temp.next=temp.next.next;
        }
         public void getPositionOf(int i) {
             int count = 0;
             Node temp = head;
             while (temp != null) {
                 if (temp.value == i) {
                     System.out.println("posi is " + (count + 1));
                 }
                 count++;
                 temp = temp.next;
             }
         }
     }
 
     public static void main(String[] args) {
         System.out.println("hello");
         LinkedList list1 = new LinkedList();
         list1.insertAtTheEnd(5);
         list1.insertAtTheEnd(6);
         list1.insertAtTheEnd(7);
         list1.insertAtTheEnd(8);
         list1.insertAtTheBeginning(4);
         list1.insertInBetween(2, 3);
         list1.getPositionOf(8);

         
         list1.deleteAtPosition(2);  
         list1.display();
     }
 }
 