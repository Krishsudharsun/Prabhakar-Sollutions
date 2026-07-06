/**
 * HubSpot Forms API integration.
 * No-ops safely (returns { ok: true, mode: "skipped" }) until
 * HUBSPOT_PORTAL_ID + the relevant form GUID are set in .env —
 * so the site works end-to-end before your CRM is connected.
 */
type HubSpotField = { name: string; value: string };

async function submitToHubSpot(formGuid: string | undefined, fields: HubSpotField[]) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;

  if (!portalId || !formGuid) {
    console.log("[crm:dev-mode] HubSpot not configured — skipping CRM sync.", fields);
    return { ok: true, mode: "skipped" as const };
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      }
    );

    if (!res.ok) throw new Error(`HubSpot responded ${res.status}`);
    return { ok: true, mode: "synced" as const };
  } catch (err) {
    console.error("[crm] HubSpot sync failed:", err);
    return { ok: false, mode: "error" as const };
  }
}

export function submitContactToHubSpot(fields: HubSpotField[]) {
  return submitToHubSpot(process.env.HUBSPOT_CONTACT_FORM_GUID, fields);
}

export function submitQualificationToHubSpot(fields: HubSpotField[]) {
  return submitToHubSpot(process.env.HUBSPOT_QUALIFICATION_FORM_GUID, fields);
}
