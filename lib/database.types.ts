export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          topic: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          topic: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      course_progress: {
        Row: {
          completed_modules: number
          course_slug: string
          id: string
          last_module: number | null
          total_modules: number
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_modules?: number
          course_slug: string
          id?: string
          last_module?: number | null
          total_modules?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_modules?: number
          course_slug?: string
          id?: string
          last_module?: number | null
          total_modules?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      experiment_progress: {
        Row: {
          completed: boolean
          experiment_index: number
          id: string
          lab_slug: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          experiment_index: number
          id?: string
          lab_slug: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          experiment_index?: number
          id?: string
          lab_slug?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      lesson_progress: {
        Row: {
          completed: boolean
          course_slug: string
          id: string
          module_index: number
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          course_slug: string
          id?: string
          module_index: number
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          course_slug?: string
          id?: string
          module_index?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      marketplace_ad_events: {
        Row: {
          ad_id: string
          created_at: string
          event_type: string
          id: string
          session_key: string | null
          user_id: string | null
        }
        Insert: {
          ad_id: string
          created_at?: string
          event_type: string
          id?: string
          session_key?: string | null
          user_id?: string | null
        }
        Update: {
          ad_id?: string
          created_at?: string
          event_type?: string
          id?: string
          session_key?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_ad_events_ad_id_fkey"
            columns: ["ad_id"]
            isOneToOne: false
            referencedRelation: "marketplace_ads"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_ads: {
        Row: {
          body: string
          created_at: string
          daily_impression_cap: number | null
          ends_at: string | null
          href: string
          id: string
          image_url: string | null
          placement: string
          product_id: string | null
          seller_id: string | null
          starts_at: string | null
          status: string
          target_category: string | null
          title: string
          total_impression_cap: number | null
          updated_at: string
        }
        Insert: {
          body?: string
          created_at?: string
          daily_impression_cap?: number | null
          ends_at?: string | null
          href: string
          id?: string
          image_url?: string | null
          placement?: string
          product_id?: string | null
          seller_id?: string | null
          starts_at?: string | null
          status?: string
          target_category?: string | null
          title: string
          total_impression_cap?: number | null
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          daily_impression_cap?: number | null
          ends_at?: string | null
          href?: string
          id?: string
          image_url?: string | null
          placement?: string
          product_id?: string | null
          seller_id?: string | null
          starts_at?: string | null
          status?: string
          target_category?: string | null
          title?: string
          total_impression_cap?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_ads_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_ads_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_flash_sale_items: {
        Row: {
          created_at: string
          flash_sale_id: string
          id: string
          inventory_limit: number | null
          original_price: number
          product_id: string
          sale_price: number
          sold_count: number
        }
        Insert: {
          created_at?: string
          flash_sale_id: string
          id?: string
          inventory_limit?: number | null
          original_price: number
          product_id: string
          sale_price: number
          sold_count?: number
        }
        Update: {
          created_at?: string
          flash_sale_id?: string
          id?: string
          inventory_limit?: number | null
          original_price?: number
          product_id?: string
          sale_price?: number
          sold_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_flash_sale_items_flash_sale_id_fkey"
            columns: ["flash_sale_id"]
            isOneToOne: false
            referencedRelation: "marketplace_flash_sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_flash_sale_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_flash_sales: {
        Row: {
          approved_by: string | null
          created_at: string
          created_by: string | null
          description: string
          ends_at: string
          id: string
          placement: string
          seller_id: string | null
          starts_at: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string
          ends_at: string
          id?: string
          placement?: string
          seller_id?: string | null
          starts_at: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string
          ends_at?: string
          id?: string
          placement?: string
          seller_id?: string | null
          starts_at?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_flash_sales_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          email_notifications: boolean
          marketplace_news: boolean
          order_updates: boolean
          product_updates: boolean
          promotions: boolean
          push_notifications: boolean
          security_alerts: boolean
          seller_messages: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          email_notifications?: boolean
          marketplace_news?: boolean
          order_updates?: boolean
          product_updates?: boolean
          promotions?: boolean
          push_notifications?: boolean
          security_alerts?: boolean
          seller_messages?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          email_notifications?: boolean
          marketplace_news?: boolean
          order_updates?: boolean
          product_updates?: boolean
          promotions?: boolean
          push_notifications?: boolean
          security_alerts?: boolean
          seller_messages?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          href: string | null
          id: string
          message: string
          metadata: Json
          read_at: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          href?: string | null
          id?: string
          message: string
          metadata?: Json
          read_at?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          href?: string | null
          id?: string
          message?: string
          metadata?: Json
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          line_total: number | null
          order_id: string
          product_name: string
          product_slug: string
          quantity: number
          seller_id: string | null
          unit_price: number
          variant_attributes: Json | null
          variant_id: string | null
          variant_label: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          line_total?: number | null
          order_id: string
          product_name: string
          product_slug: string
          quantity: number
          seller_id?: string | null
          unit_price: number
          variant_attributes?: Json | null
          variant_id?: string | null
          variant_label?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          line_total?: number | null
          order_id?: string
          product_name?: string
          product_slug?: string
          quantity?: number
          seller_id?: string | null
          unit_price?: number
          variant_attributes?: Json | null
          variant_id?: string | null
          variant_label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "seller_product_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          currency: string
          customer_id: string | null
          id: string
          payment_status: string
          shipping_address: string
          shipping_amount: number
          shipping_city: string
          shipping_country: string
          shipping_full_name: string
          shipping_phone: string | null
          status: string
          subtotal: number
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          customer_id?: string | null
          id?: string
          payment_status?: string
          shipping_address: string
          shipping_amount?: number
          shipping_city: string
          shipping_country: string
          shipping_full_name: string
          shipping_phone?: string | null
          status?: string
          subtotal: number
          total_amount: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          customer_id?: string | null
          id?: string
          payment_status?: string
          shipping_address?: string
          shipping_amount?: number
          shipping_city?: string
          shipping_country?: string
          shipping_full_name?: string
          shipping_phone?: string | null
          status?: string
          subtotal?: number
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          order_id: string
          paid_at: string | null
          provider: string
          provider_reference: string | null
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          order_id: string
          paid_at?: string | null
          provider: string
          provider_reference?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          order_id?: string
          paid_at?: string | null
          provider?: string
          provider_reference?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      product_alerts: {
        Row: {
          active: boolean
          alert_type: string
          baseline_price: number | null
          created_at: string
          id: string
          product_id: string
          target_price: number | null
          triggered_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean
          alert_type: string
          baseline_price?: number | null
          created_at?: string
          id?: string
          product_id: string
          target_price?: number | null
          triggered_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean
          alert_type?: string
          baseline_price?: number | null
          created_at?: string
          id?: string
          product_id?: string
          target_price?: number | null
          triggered_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_alerts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      seller_external_order_items: {
        Row: {
          created_at: string
          external_order_id: string
          id: string
          line_total: number
          product_id: string | null
          product_name: string
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          external_order_id: string
          id?: string
          line_total: number
          product_id?: string | null
          product_name: string
          quantity: number
          unit_price: number
        }
        Update: {
          created_at?: string
          external_order_id?: string
          id?: string
          line_total?: number
          product_id?: string | null
          product_name?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "seller_external_order_items_external_order_id_fkey"
            columns: ["external_order_id"]
            isOneToOne: false
            referencedRelation: "seller_external_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seller_external_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_external_orders: {
        Row: {
          commission_rate: number
          created_at: string
          currency: string
          customer_email: string | null
          customer_name: string | null
          customer_phone: string | null
          external_reference: string | null
          fulfillment_status: string
          gross_amount: number
          id: string
          payment_status: string
          payout_status: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          seller_note: string | null
          source: string
          updated_at: string
          verification_status: string
        }
        Insert: {
          commission_rate: number
          created_at?: string
          currency?: string
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          external_reference?: string | null
          fulfillment_status?: string
          gross_amount: number
          id?: string
          payment_status?: string
          payout_status?: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          seller_note?: string | null
          source?: string
          updated_at?: string
          verification_status?: string
        }
        Update: {
          commission_rate?: number
          created_at?: string
          currency?: string
          customer_email?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          external_reference?: string | null
          fulfillment_status?: string
          gross_amount?: number
          id?: string
          payment_status?: string
          payout_status?: string
          platform_fee?: number
          seller_amount?: number
          seller_id?: string
          seller_note?: string | null
          source?: string
          updated_at?: string
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_external_orders_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_order_items: {
        Row: {
          commission_rate: number
          created_at: string
          fulfillment_status: string
          gross_amount: number
          id: string
          order_item_id: string
          payout_status: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          seller_note: string | null
          tracking_number: string | null
          updated_at: string
        }
        Insert: {
          commission_rate: number
          created_at?: string
          fulfillment_status?: string
          gross_amount: number
          id?: string
          order_item_id: string
          payout_status?: string
          platform_fee: number
          seller_amount: number
          seller_id: string
          seller_note?: string | null
          tracking_number?: string | null
          updated_at?: string
        }
        Update: {
          commission_rate?: number
          created_at?: string
          fulfillment_status?: string
          gross_amount?: number
          id?: string
          order_item_id?: string
          payout_status?: string
          platform_fee?: number
          seller_amount?: number
          seller_id?: string
          seller_note?: string | null
          tracking_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_order_items_order_item_id_fkey"
            columns: ["order_item_id"]
            isOneToOne: true
            referencedRelation: "order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seller_order_items_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_payouts: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          paid_at: string | null
          provider: string | null
          provider_reference: string | null
          seller_id: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          paid_at?: string | null
          provider?: string | null
          provider_reference?: string | null
          seller_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          paid_at?: string | null
          provider?: string | null
          provider_reference?: string | null
          seller_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_payouts_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_product_images: {
        Row: {
          created_at: string
          id: string
          image_url: string
          product_id: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          product_id: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          product_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "seller_product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_product_variants: {
        Row: {
          attributes: Json
          compare_at_price: number | null
          created_at: string
          id: string
          inventory: number
          is_active: boolean
          label: string
          price: number
          product_id: string
          sku: string | null
          updated_at: string
        }
        Insert: {
          attributes?: Json
          compare_at_price?: number | null
          created_at?: string
          id?: string
          inventory?: number
          is_active?: boolean
          label: string
          price: number
          product_id: string
          sku?: string | null
          updated_at?: string
        }
        Update: {
          attributes?: Json
          compare_at_price?: number | null
          created_at?: string
          id?: string
          inventory?: number
          is_active?: boolean
          label?: string
          price?: number
          product_id?: string
          sku?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "seller_products"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_products: {
        Row: {
          category: string
          compare_at_price: number | null
          created_at: string
          description: string
          id: string
          image_url: string | null
          inventory: number
          name: string
          price: number
          rejection_reason: string | null
          seller_id: string
          slug: string
          status: string
          updated_at: string
        }
        Insert: {
          category: string
          compare_at_price?: number | null
          created_at?: string
          description?: string
          id?: string
          image_url?: string | null
          inventory?: number
          name: string
          price: number
          rejection_reason?: string | null
          seller_id: string
          slug: string
          status?: string
          updated_at?: string
        }
        Update: {
          category?: string
          compare_at_price?: number | null
          created_at?: string
          description?: string
          id?: string
          image_url?: string | null
          inventory?: number
          name?: string
          price?: number
          rejection_reason?: string | null
          seller_id?: string
          slug?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_products_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_verification_documents: {
        Row: {
          created_at: string
          document_type: string
          id: string
          status: string
          storage_path: string
          verification_id: string
        }
        Insert: {
          created_at?: string
          document_type: string
          id?: string
          status?: string
          storage_path: string
          verification_id: string
        }
        Update: {
          created_at?: string
          document_type?: string
          id?: string
          status?: string
          storage_path?: string
          verification_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_verification_documents_verification_id_fkey"
            columns: ["verification_id"]
            isOneToOne: false
            referencedRelation: "seller_verifications"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_verification_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          note: string | null
          seller_id: string
          verification_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          note?: string | null
          seller_id: string
          verification_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          note?: string | null
          seller_id?: string
          verification_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seller_verification_events_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seller_verification_events_verification_id_fkey"
            columns: ["verification_id"]
            isOneToOne: false
            referencedRelation: "seller_verifications"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_verifications: {
        Row: {
          country: string | null
          created_at: string
          date_of_birth: string | null
          id: string
          id_last4: string | null
          id_type: string | null
          identity_provider: string | null
          legal_name: string | null
          phone: string | null
          provider_reference: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          seller_id: string
          submitted_at: string | null
          updated_at: string
          verification_status: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          id?: string
          id_last4?: string | null
          id_type?: string | null
          identity_provider?: string | null
          legal_name?: string | null
          phone?: string | null
          provider_reference?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          seller_id: string
          submitted_at?: string | null
          updated_at?: string
          verification_status?: string
        }
        Update: {
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          id?: string
          id_last4?: string | null
          id_type?: string | null
          identity_provider?: string | null
          legal_name?: string | null
          phone?: string | null
          provider_reference?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          seller_id?: string
          submitted_at?: string | null
          updated_at?: string
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "seller_verifications_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: true
            referencedRelation: "sellers"
            referencedColumns: ["id"]
          },
        ]
      }
      sellers: {
        Row: {
          commission_rate: number
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          order_instructions: string | null
          order_method: string
          status: string
          store_name: string
          store_slug: string
          updated_at: string
          user_id: string
          verification_status: string
          whatsapp_number: string | null
        }
        Insert: {
          commission_rate?: number
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          order_instructions?: string | null
          order_method?: string
          status?: string
          store_name: string
          store_slug: string
          updated_at?: string
          user_id: string
          verification_status?: string
          whatsapp_number?: string | null
        }
        Update: {
          commission_rate?: number
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          order_instructions?: string | null
          order_method?: string
          status?: string
          store_name?: string
          store_slug?: string
          updated_at?: string
          user_id?: string
          verification_status?: string
          whatsapp_number?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_seller_external_order: {
        Args: { p_payload: Json }
        Returns: string
      }
      record_seller_payout: {
        Args: {
          p_provider?: string
          p_provider_reference?: string
          p_seller_id: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
