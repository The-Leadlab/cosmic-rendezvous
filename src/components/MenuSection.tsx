import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

type MenuItem = { name: string; price: string };
type MenuCategory = { titleKey: TranslationKey; note?: string; items: MenuItem[] };

const menu: MenuCategory[] = [
  {
    titleKey: "menuCatHot",
    items: [
      { name: "Café / Thé", price: "4.50" },
      { name: "Lait", price: "3.–" },
      { name: "Renversé / Cappuccino", price: "5.–" },
      { name: "Iced Coffee", price: "5.50" },
      { name: "Chocolat Chaud", price: "4.50" },
      { name: "Hot Ginger", price: "5.–" },
      { name: "Grog", price: "10.–" },
    ],
  },
  {
    titleKey: "menuCatSofts",
    note: "3 dl",
    items: [
      { name: "Sirop", price: "3.–" },
      { name: "Limonade", price: "4.–" },
      { name: "Pepsi / Pepsi 0 / Ice Tea", price: "4.50" },
      { name: "Jus / Eau Gaz", price: "4.50" },
      { name: "Ginger Ale / Beer / Tonic", price: "5.–" },
      { name: "Maté", price: "6.–" },
    ],
  },
  {
    titleKey: "menuCatBeers",
    note: "33 cl / 50 cl",
    items: [
      { name: "Blonde", price: "5.– / 7.–" },
      { name: "Blanche", price: "6.– / 8.–" },
      { name: "IPA", price: "6.– / 9.–" },
      { name: "Supp Ginger", price: "+1.–" },
    ],
  },
  {
    titleKey: "menuCatWines",
    note: "1,5 dl",
    items: [
      { name: "Chasselas", price: "7.–" },
      { name: "Gamay", price: "7.–" },
      { name: "Rosé", price: "7.–" },
      { name: "Chardonnay", price: "8.–" },
      { name: "Pinot", price: "8.–" },
      { name: "Prosecco", price: "7.50" },
    ],
  },
  {
    titleKey: "menuCatShots",
    note: "2 cl",
    items: [
      { name: "Menthe Glaciale", price: "4.–" },
      { name: "Rhum / Vodka / Amaretto", price: "5.–" },
      { name: "Tequila", price: "5.– / 7.–" },
      { name: "Mezcal", price: "7.– / 9.–" },
    ],
  },
  {
    titleKey: "menuCatLong",
    note: "3 dl",
    items: [
      { name: "Vodka Maté", price: "15.–" },
      { name: "Mule (Moscow / Jamaïcan / London)", price: "15.–" },
      { name: "Vodka / Gin", price: "13.–" },
      { name: "Rhum / Whisky", price: "15.–" },
    ],
  },
  {
    titleKey: "menuCatApero",
    note: "2 cl / 4 cl",
    items: [
      { name: "Suze / Martini / Ricard", price: "4.– / 6.–" },
      { name: "Williamine / Abricotine", price: "7.–" },
      { name: "Moitié Moitié (Poire / Abricot)", price: "9.–" },
      { name: "Baileys", price: "9.–" },
      { name: "Absinthe", price: "8.– / 10.–" },
      { name: "Cognac", price: "12.–" },
      { name: "Armagnac", price: "12.–" },
      { name: "Spritz Aperol", price: "14.–" },
      { name: "Spritz Campari", price: "15.–" },
    ],
  },
  {
    titleKey: "menuCatCocktails",
    items: [
      { name: "Violette Cosmic", price: "15.–" },
      { name: "Rose Cosmic", price: "15.–" },
      { name: "Space Alien", price: "16.–" },
      { name: "Sex And The Galaxy", price: "16.–" },
      { name: "Mary Love Bloody", price: "15.–" },
      { name: "No Eggs Sour", price: "15.–" },
    ],
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="menu" className="relative py-24 md:py-32 cosmic-gradient noise-bg scroll-mt-20">
      <div className="container mx-auto px-4 relative z-10 min-w-0 max-w-[100vw]" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.1em] mb-4 neon-glow-cyan">
            {t("menuTitle")}
          </h2>
          <p className="font-body text-muted-foreground">{t("menuSubtitle")}</p>
        </motion.div>

        {/* Scrollable category cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4">
          {menu.map((cat, i) => (
            <motion.div
              key={cat.titleKey}
              className="min-w-[300px] md:min-w-[340px] snap-center border border-border rounded-lg p-6 glass-dark group hover:neon-border-cyan transition-all duration-500 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <div className="flex items-baseline gap-3 mb-5">
                <h3 className="font-display text-base tracking-[0.15em] text-neon-cyan uppercase">
                  {t(cat.titleKey)}
                </h3>
                {cat.note && (
                  <span className="text-xs font-body text-muted-foreground">[{cat.note}]</span>
                )}
              </div>

              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-4 group/item">
                    <span className="font-body text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {item.name}
                    </span>
                    <span className="font-display text-sm text-primary whitespace-nowrap">
                      {item.price || t("menuOnRequest")}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
