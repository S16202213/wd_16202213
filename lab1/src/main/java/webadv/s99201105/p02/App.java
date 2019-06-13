package webadv.s99201105.p02;
import java.io.*;
import java.util.Scanner;

import org.apache.commons.codec.digest.DigestUtils;
public class App {
    @SuppressWarnings("resource")
	public static void main(String[] args) throws IOException {
    	Scanner zh=new Scanner(System.in);
    	Scanner ps=new Scanner(System.in);
    	System.out.println("账号:	");
    	String   id=zh.nextLine();
    	System.out.println("密码:	");
    	String  mm=ps.nextLine();
    	
    
    	FileReader reader = new FileReader("index.txt");
        BufferedReader br = new BufferedReader(reader);
        String line;
        String a[]=new String[2];
        int i=0;
        while ((line = br.readLine()) != null) {
            // 一次读入一行数据
            a[i]=line;
            i++;
        }
    	String mima=sha256hex(mm);
    	
    	if(id.equals(a[0])&&mima.equals(a[1])) {
    		System.out.println("登陆成功");
    		System.out.println("账号为		"+a[0]);
  
    		System.out.println("密码为		"+a[1]);
    	}
    	else
    		System.out.println("登陆失败");
        
    }
    public static String sha256hex(String input) {
        return DigestUtils.sha256Hex(input);
    }
}
