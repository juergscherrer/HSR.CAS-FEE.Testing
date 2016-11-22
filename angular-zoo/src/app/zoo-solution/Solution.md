Anmerkungen zu den Lösungen

# Erste Schritte
Damit das Testen der jeweiligen Komponenten (Lion / Panda, FoodStorage, AnimalContext) vereinfacht werden kann,
sollten diese durch Interfaces entkoppelt werden. Durch die Interfaces steht dem Einsatz von Test Doubles nichts mehr
im Wege.

# Refactoring 1 (Singleton Assassination)
Die Entkopplung wird erreicht, indem der Singleton aus FoodStorage entfernt wird. Ein Singleton erzwingt eine
einmalige, globale Instanzierbarkeit. Dies ist fürs Testen sehr hinderlich, vor allem wenn dieser Singleton Zugriffe
auf externe System (depended-on component - DOCs, wie SQL Server, File System, usw.) verursacht.
Der Singleton wird also in Form eines Interfaces (und in den Tests mittels Test Double Instanzen) ersetzt und dem Animal
übergeben. Aber: Wird diese Form von Abhängigkeits-Reduzierung zu exzessiv betrieben, ist eine lange Parameterliste
unumgänglich. Diese vielen Argumente können wiederum in eine sogenannte Context Klasse (in unserem Fall die
AnimalContext class) zusammengefasst werden.
Weiterführende Anmerkung: Weitere Möglichkeiten, solche "Long Parameter Lists" zu vermeiden, bestehen durchaus.
Beispielsweise kann ein Service Locator bzw. Dependency-Injection (DI) die Abhängigkeiten direkt aus/in jeweilige Properties
"füllen" (-> mehr Details zu DI finden Sie in den CAS FEE Angular 2 Vorlesungsunterlagen).

# Refactoring 2 (Remove Dependencies)
Auch der AnimalContext enthält in unserem Fall Logik. Daher sollte auch hier das Interface (AnimalContextBase)
extrahiert und in Animal nur noch 'gegen' das neu eingeführte Interface programmiert werden.
Dasselbe Konzept soll nun ebenfalls für den FoodStorage (Interface FoodStorageBase) angewendet werden.

# Tests schreiben
Nachdem der Code nun "testbar" (und somit wartbar) gemacht wurde, kann mit Testen begonnen werden. Als erste Tests
sind einfache Szenarien denkbar (z.B. Tiername), um ein Gespür fürs Testing mit Jasmine zu erhalten.

Hinweise:
 * Als Solution (Ordner 'zoo-solution') wurden nicht alle Tests mit allen Fehlermöglichkeiten implementiert.
 * In der Praxis sollten Sie vor allem langsame externe Systeme (wie Datenbank, FileSystem, HTTP Request, DOM API,
   Cookies, LocalStorage, ...) in der Business-Logik mit Test-Doubles ersetzen. Dies garantiert eine performante und
   platformunabhängige Ausführbarkeit der Logik mittles Unit Tests.
 * Die Grösse einer "Unit" ist nicht definiert; eine Unit kann eine Klasse sein, eine Methode oder ein ganzer Namensraum;
   je nach Komplexität und Logik in den zu testenden Komponenten.
  ** Eine DTO-Klasse entspricht beispielsweise keiner "Unit", da der Logik-Anteil zu gering ist.
  ** Eine mathematische Hilfsklassen kann mehreren "Unit"s entsprechen, da jede Methode (z.B. Math.Euler() / Math.RungeKutta() / ...)
     sehr viel Logik enthält.
