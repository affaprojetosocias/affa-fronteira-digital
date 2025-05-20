
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">AFFA</h3>
            <p className="text-gray-300">
              Associação Fortalecendo Famílias
            </p>
            <p className="text-gray-300 mt-2">
              Rua Coronel Santana 113, Ponta Porã - MS
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Contato</h3>
            <p className="text-gray-300">
              <a href="mailto:affa.osc@gmail.com" className="hover:underline">
                affa.osc@gmail.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              <span>CNPJ: 57.954.461/0001-10</span>
            </p>
            <p className="text-gray-300 mt-2">
              <span>Telefone: (67) 99921-3236</span>
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-xl mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end">
              <SocialIcons />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Associação Fortalecendo Famílias (AFFA). Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
