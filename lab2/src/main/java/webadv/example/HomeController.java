package webadv.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HomeController {
	 @GetMapping("/test")
	    public String indext() {
	        return "index";
	    }
	    
}
