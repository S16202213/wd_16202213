package webadv.s99201105.p3;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class HelloController {
    @GetMapping("/")
    public String indext() {
        return "welcome";
    }
    
}