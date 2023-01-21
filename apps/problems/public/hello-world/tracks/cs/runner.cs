namespace KodChallenge {
    public class Application {
        public static void Main(string[] args) { // 1 "asd" 2.3
            int a = parseInt(args[0]); // -> a:int;
            string b = args[1];
            Runner.Run(a, b);
        }
    }
}