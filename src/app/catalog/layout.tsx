import styles from "@/Components/Catalog/Catalog.module.scss";

function CatalogLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return <div className={styles.layout}>{children}</div>;
}
export default CatalogLayout;
