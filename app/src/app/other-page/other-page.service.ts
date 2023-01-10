import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './other-page.component';

type ContentFlags =
  | 'delivery'
  | 'claims'
  | 'installments'
  | 'benefits'
  | 'recipe-registration'
  | 'security'
  | 'privacy-politics'
  | 'regulamin'
  | 'contact'
  | 'about'
  | 'shops'
  | 'special-offers';

@Injectable({
  providedIn: 'root',
})
export class OtherPageService {
  content: { [key: string]: Content } = {
    delivery: {
      content:
        'Zamówienia kompletowane są w ciągu kilku dniu. W przypadku braku towaru na magazynie wysyłamy informację do klienta z informacją i czasem oczekiwania na dostępność produktu.',
      leftColumnLabel: 'Firmy kurierskie',
      leftColumn:
        'Aktulanie nasze zamówienia wysyłamy firmami kurierskimi: X i Z oraz Y. W przypadku mniejszych gabarytów jest możliwość wysyłki przez paczkomat. Zamówiony towart można również odebrać w jednym z naszych sklepów.',
      rightColumnLabel: 'Wysyłki',
      rightColumn:
        'Zamówienia złożone do godziny 13:00 wysyłane i dostarczane tego samego na wskazany adres. W przypadku zamówień złożonych po godzinie 13:00 towar zostanie wysłany następnego dnia.',
    },
    claims: {
      content:
        'Produkty zakupione w sklepie można zwrócić tylko z paragonem oraz nienaruszonym opakowaniem i towarem. W przypadku zamówień internetowych klient ma prawo zwrócić produkt do 14 dni od dnia odebrania towaru. Może tego dokonać w jednym z naszych sklepów lub wysyłając na adres zwrotny wraz z paragonem.',
      leftColumnLabel: 'Polityka zwrotów',
      leftColumn:
        'Zamówienia internetowe oraz produkty zakupione w sklepie można zwrócić w dowolnym punkcie. Do zwracanego produktu/zamówienia należy dołączyć fakturę lub paragon. Zwroty można dokonać za pośrednictwem strony ',
      rightColumn: '',
    },
    installments: {
      content:
        'Oferujemy raty zarówno w sklepach stajonarnych jak i dla zamówień internetowych. Oferujemy raty 0%! Sprawdź naszą ofertę ratalną!',
      leftColumnLabel:
        'Banki z którymi współpracujemy',
      leftColumn:
        'Bank X, * Bank Y, * Bank Z, * Bank A, * Bank C',
    },
    benefits: {
      content:
        'Zarejestrowane konta dają wiele udogodnień, załóż i sprawdź!',
      leftColumnLabel:
        'Korzyści z załózenia konta',
      leftColumn:
        'Wgląd do historii zakupów * Możliwość pobrania paragonów i faktur w dowolnej chwili * Łatwy proces składania reklamacji * Wygodne sprawdzanie statusu reklamacji/zwrotów',
    },
    'recipe-registration': {
      content:
        'Należy założyć konto, aby zarejestrować paragon',
    },
    security: {
      content:
        'Administratorem danych jest firma CS z siedzibą w Warszawie. Wszelkie uwagi, pytania i niejasności prosimy kierować na adres poniżej',
      leftColumnLabel: 'Klauzula RODO',
      leftColumn:
        'Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119 z 04.05.2016, str. 1), dalej „RODO”, informujemy, że: administratorem Pani/Pana danych osobowych jest CS z siedzibą w Warszawie, ul. xyz 9/99, 11-111 Warszawa, telefon: 11-1111 * Pani/Pana dane osobowe będą przechowywane, zgodnie z art. 97 ust. 1 ustawy Pzp, przez okres 4 lat od dnia zakończenia postępowania o udzielenie zamówienia, a jeżeli czas trwania umowy ',
      rightColumnLabel: 'Adres',
      rightColumn:
        'ul. xyz 9/9, Warszawa 11-111 * Email: firmaCS@example.pl * telefon: 333-333-333',
    },
    'privacy-politics': {
      content:
        'Korzystając z Serwisu zgadzasz się z Regulaminem, Polityką Prywatności i Polityką Cookies. Szczegółowo opisaliśmy w nich zasady korzystania z mikroPorady.pl oraz sposób gromadzenia, wykorzystania i udostępnienia danych osobowych. Zapoznaj się z naszym komunikatem w związku realizacją obowiązku z art. 13 RODO',
    },
    regulamin: {
      content: '',
      leftColumnLabel: 'Reglumanin Sklepu CS',
      leftColumn:
        'Sprzedawca - osoba fizyczna prowadząca działalność gospodarczą pod firmą CS, wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG) prowadzonej przez ministra właściwego ds. gospodarki, NIP 0989124xxf * Klient - każdy podmiot dokonujący zakupów za pośrednictwem Sklepu. * Przedsiębiorca - osoba fizyczna, osoba prawna i jednostka organizacyjna niebędąca osobą prawną, której odrębna ustawa przyznaje zdolność prawną, wykonująca we własnym imieniu działalność gospodarczą, która korzysta ze Sklepu. * Sklep - sklep internetowy prowadzony przez Sprzedawcę pod adresem internetowym www.xyz.example.com * Umowa zawarta na odległość - umowa zawarta z Klientem w ramach zorganizowanego systemu zawierania umów na odległość (w ramach Sklepu), bez jednoczesnej fizycznej obecności stron, z wyłącznym wykorzystaniem jednego lub większej liczby środków porozumiewania się na odległość do chwili zawarcia umowy włącznie. * Regulamin - niniejszy regulamin Sklepu. * Zamówienie - oświadczenie woli Klienta składane za pomocą Formularza Zamówienia i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży Produktu lub Produktów ze Sprzedawcą. * Konto - konto klienta w Sklepie, są w nim gromadzone są dane podane przez Klienta oraz informacje o złożonych przez niego Zamówieniach w Sklepie. * Formularz rejestracji - formularz dostępny w Sklepie, umożliwiający utworzenie Konta. * Formularz zamówienia - interaktywny formularz dostępny w Sklepie umożliwiający złożenie Zamówienia, w szczególności poprzez dodanie Produktów do Koszyka oraz określenie warunków Umowy Sprzedaży, w tym sposobu dostawy i płatności. * Koszyk – element oprogramowania Sklepu, w którym widoczne są wybrane przez Klienta Produkty do zakupu, a także istnieje możliwość ustalenia i modyfikacji danych Zamówienia, w szczególności ilości produktów. * Produkt - dostępna w Sklepie rzecz ruchoma/usługa będąca przedmiotem Umowy Sprzedaży między Klientem a Sprzedawcą. * Umowa Sprzedaży - umowa sprzedaży Produktu zawierana albo zawarta między Klientem a Sprzedawcą za pośrednictwem Sklepu internetowego. Przez Umowę Sprzedaży rozumie się też - stosowanie do cech Produktu - umowę o świadczenie usług i umowę o dzieło',
    },
    contact: {
      content:
        'Siedziba firmy znajduje się w Warszawie przy ulicy xyz. Na miejscu jest parking, gdzie można zaparkować samochód. Aby wjechać na teren siedzby oraz parkingu należy powiadomić ochronę o umówionym spotkaniu.',
    },
    about: {
      content:
        'Firma CS została założona w 1995 roku w Warszawie, jako mały lokalny sklep z elektroniką. W 1999 roku zostaje otwarty sklep w Gdańsku, a w kolejnych latach w kolejnych miejscowościach',
    },
    shops: {
      content:
        'Nasze sklepy znajdują się w dużych i małych miastach, poniżej znajduje się pełna lista naszych sklepów',
      leftColumnLabel: 'Nasze sklepy',
      leftColumn:
        'Wrocław, * Tarnów, * Białystok, * Warszawa, * Gdańsk, * Sopot, * Łódź, * Szczecin, * Poznań, * Kraków, * Bielany Wrocławskie',
    },
    'special-offers': {
      content:
        'Na stronie głównej widnieją reklmay ze specjalnymi ofertami i aktualnymi promocjami !',
    },
  };
  constructor() {}

  returnData(
    id: ContentFlags | string
  ): Observable<Content> {
    const { [id]: requiredContent } =
      this.content;
    return of(requiredContent);
  }
}
