public class Main {
   public static class Node {
        int value;
        Node next;

        // Correct constructor without a return type
        Node(int data) {
            this.value = data;
        }
    }

  public static class LinkedList {
        Node head=null;
        Node tail=null;
        void insertAtTheEnd(int value)
        {  Node temp=new Node(value);
            if(head==null)
            {
              head=temp;
              
            }
            else{
                tail.next=temp;
                
            }
            tail=temp;
        }
        void insertAtTheBegining(int value)
        {
            Node temp=new Node(value);
            if(head==null)
            {
                head=temp;
                tail=temp;
            }
            else{
                temp.next=head;
                head=temp;
            }
        }
        void insertInBetween(int val,int ind){
            Node temp=new Node(val);
            Node t=head;
            for(int i=0;i<ind-1;i++)
            {
                t=t.next;
            }
            temp.next=t.next;
            t.next=temp;

        }
        void display(){
            int count=0;
            Node temp=head;
            while(temp!=null)
            {
             System.out.println(temp.value+" ");
                temp=temp.next;
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
        list1.insertAtTheBegining(4);
        list1.insertInBetween(2,3);
        list1.display();
    }
}
